import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { CatpuccinMochaTheme } from "./themes";
import { TermThemes } from "./themes";
import { getTemplate } from "../../utils";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { SearchAddon } from "@xterm/addon-search";
import { LigaturesAddon } from "@xterm/addon-ligatures";
import { AnsiCodes } from "../../ansi-codes";

/**
 * Represents a terminal emulator that provides a command-line interface to the
 * user. The terminal is initialized with a welcome message and a set of
 * commands that the user can execute. To instantiate a terminal, pass the ID of
 * the container element that will host the terminal. The constructor is
 * non-default as the xterm.js terminal requires a container element to be
 * initialized.
 */
export class TerminalComponent extends HTMLElement {
  private terminal: Terminal | null = null;
  private fitAddon: FitAddon | null = null;
  private searchAddon: SearchAddon | null = null;
  private ligaturesAddon: LigaturesAddon | null = null;
  private controller: AbortController | null = null;
  private shadow: ShadowRoot;
  private static template: HTMLTemplateElement;
  private pwd: string = "~";

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    if (!TerminalComponent.template) {
      TerminalComponent.template = getTemplate("#terminal-component-template");
    }

    this.shadow.appendChild(TerminalComponent.template.content.cloneNode(true));
  }

  connectedCallback() {
    try {
      this.terminal = this.initializeTerminal();
      this.setupKeyboardHandling();
      this.writeWelcomeMessage();
    } catch (error) {
      console.error("Failed to initialize terminal:", error);
    }
  }

  /**
   * Initializes the terminal emulator with the necessary addons and settings.
   * @private
   * @returns {Terminal} The initialized terminal emulator.
   */
  private initializeTerminal(): Terminal {
    if (this.terminal) return this.terminal;

    const terminal = new Terminal({
      cursorBlink: true,
      cursorStyle: "bar",
      theme: CatpuccinMochaTheme,
      fontFamily: "JetBrains Mono",
      cols: 80,
      allowProposedApi: true,
    });

    // xterm addons
    // See: https://github.com/xtermjs/xterm.js/tree/master/addons
    this.fitAddon = new FitAddon();
    this.searchAddon = new SearchAddon();
    this.ligaturesAddon = new LigaturesAddon();

    terminal.loadAddon(this.fitAddon);
    terminal.loadAddon(new WebLinksAddon());
    terminal.loadAddon(this.searchAddon);

    const container = this.shadow.querySelector(
      ".terminal-container",
    ) as HTMLElement;
    if (!container) throw new Error("Terminal container not found");

    terminal.open(container);

    this.fitAddon.fit();
    terminal.loadAddon(this.ligaturesAddon);

    // start sessionStorage to track commands
    //sessionStorage.setItem("cmdHistory", "");

    return terminal;
  }

  /**
   * Handles user input on the prompt line. On hitting "Enter", if the input is
   * non-empty, a custom event is dispatched for handling server-side. Currently
   * does not support command history navigation or Tab completion.
   * @private
   * @returns {void}
   */
  private setupKeyboardHandling(): void {
    if (!this.terminal) return;

    let input = "";

    // TODO: command history, arrow navigation, Tab completions
    //let cursorPosition = 0;
    //let cmdHistory = sessionStorage.getItem("cmdHistory");

    this.terminal.onKey(({ key, domEvent }) => {
      if (!this.terminal) return;

      if (domEvent.key === "Enter") {
        this.terminal.write("\r\n");

        if (input.trim() === "") {
          this.prompt();
          return;
        }

        const event = new CustomEvent("terminalInputEvent", {
          detail: { input: input.trim() },
        });
        document.dispatchEvent(event);
        input = "";
      } else if (domEvent.key === "Backspace") {
        if (input.length > 0) {
          input = input.slice(0, -1);
          this.terminal.write("\b \b");
        }
      } else if (domEvent.ctrlKey && domEvent.key === "l") {
        // Clear the terminal buffer on Ctrl + L
        const event = new CustomEvent("clearTerminalEvent");
        document.dispatchEvent(event);
      } else if (domEvent.ctrlKey && domEvent.key === "c") {
        // Pseudo-SIGINT signal
        // NOTE: in a real terminal, this would send a signal to the running
        // process to terminate it over the network
        if (input === "") {
          return;
        }
        // Append ^C to end of line with background and go to next line if
        // input is non-empty
        this.terminal.write(
          `${AnsiCodes.BackgroundBlue}^C${AnsiCodes.Reset}\r\n`,
        );
        input = "";
        this.prompt();
      } else if (domEvent.ctrlKey && domEvent.key === "u") {
        // Clear the current line
        input = "";
        this.terminal.write("\x1b[2K\r"); // Clear line
        this.prompt();
      } else if (domEvent.ctrlKey && domEvent.key === "w") {
        // delete the last word
        const words = input.trim().split(" ");

        if (words.length > 0) {
          input = words.slice(0, -1).join(" ");
        }

        this.terminal.write("\x1b[1K"); // Clear line from cursor
        this.terminal.write("\r"); // Move cursor to start of line
        this.prompt();
        this.terminal.write(input);
      } else if (domEvent.key === "ArrowDown") {
        return;
      } else if (domEvent.key === "ArrowUp") {
        return;
      } else if (domEvent.key === "ArrowLeft") {
        return;
      } else if (domEvent.key === "ArrowRight") {
        return;
      } else if (domEvent.key === "Tab") {
        return;
      } else {
        input += key;
        this.terminal.write(key);
      }
    });
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.terminal?.dispose();
  }

  /**
   * Prints the default message that greets the user when they first launch the
   * terminal.
   * @private
   * @returns {void}
   */
  private writeWelcomeMessage(): void {
    if (!this.terminal) return;

    this.terminal.writeln(`${Date().toLocaleString()}`);
    this.terminal.writeln("Welcome to Micah Kepe's terminal, the nerd shell.");
    this.terminal.writeln(
      `Type \`${AnsiCodes.Cyan}help${AnsiCodes.Reset}\` for a list of commands.`,
    );
    this.prompt();
  }

  /**
   * Refits the terminal to the parent container.
   * @returns {void}
   */
  refit(): void {
    this.fitAddon?.fit();
  }

  /**
   * Writes a prompt to the terminal to indicate that the terminal is ready to
   * accept user input.
   * @private
   * @returns {void}
   */
  private prompt(prevCmdFailed = false): void {
    if (!this.terminal) return;

    let prepend: string;

    if (prevCmdFailed) {
      prepend = `${AnsiCodes.BoldRed}→${AnsiCodes.Reset}`;
    } else {
      prepend = `${AnsiCodes.BoldGreen}→${AnsiCodes.Reset}`;
    }

    // A dupe of the `bobbyrussell` Oh-my-zsh theme
    this.terminal.write(
      `${prepend}  ${AnsiCodes.BoldCyan}${this.pwd} ${AnsiCodes.Reset}${AnsiCodes.BoldPurple}git:(${AnsiCodes.Reset}${AnsiCodes.BoldRed}main${AnsiCodes.BoldPurple})${AnsiCodes.BoldHighIntensityYellow} ✘${AnsiCodes.Reset} `,
    );
  }

  /**
   * Formats the path to always show ~ for home directory and its subdirectories
   * @param {string} path The path to format
   * @returns {string} The formatted path
   */
  private formatPath(path: string): string {
    // If we're at root level of home directory
    if (path === "/" || path === "~" || path === "") {
      return "~";
    }

    // If it's a subdirectory path
    if (path.startsWith("/")) {
      // Remove the leading slash and replace with ~/
      return `~${path}`;
    }

    // If it's already a relative path with ~, return as is
    if (path.startsWith("~")) {
      return path;
    }

    // For any other paths, prefix with ~/
    return `~/${path}`;
  }

  /**
   * Sets the current working directory for the terminal. This should be called
   * when the user changes directories to properly update the terminal view.
   * @param {string} pwd The new current working directory.
   * @returns {void}
   */
  setPwd(pwd: string): void {
    this.pwd = this.formatPath(pwd);
  }

  /**
   * Writes the output of a command to the terminal.
   * @param {string} output The output of the command to write to the terminal.
   * @returns {void}
   */
  writeOutput(output: string, prevCmdFailed = false): void {
    if (output.trim() === "") {
      this.prompt(prevCmdFailed);
      return;
    }

    const lines = output.split("\n"); // Split content by newlines
    lines.forEach((line) => {
      this.terminal?.writeln(line.trimEnd()); // Trim excess spaces and write each line
    });
    this.prompt(prevCmdFailed);
  }

  /**
   * Changes the theme of the terminal emulator.
   * @param {string} theme The name of the theme to change to.
   * @returns {void}
   */
  changeTheme(theme: string): void {
    if (!this.terminal) return;

    // get the theme object from the available themes
    // or use the default theme
    const themeObject = TermThemes.get(theme) || CatpuccinMochaTheme;

    // create a new terminal with the new theme and set the current working
    // directory
    this.terminal.options.theme = themeObject;
  }

  /**
   * Clears the terminal screen, leaving the current prompt line as the first
   * line in the buffer.
   * @returns {void}
   */
  clearBuffer(): void {
    this.terminal?.clear();
  }
}

customElements.define("terminal-component", TerminalComponent);
