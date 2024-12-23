import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { CatpuccinMochaTheme } from "./themes";
import { TermThemes } from "./themes";
import { getTemplate } from "../../utils";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { SearchAddon } from "@xterm/addon-search";
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
  private controller: AbortController | null = null;
  private shadow: ShadowRoot;
  private static template: HTMLTemplateElement;

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
    });

    this.fitAddon = new FitAddon();
    this.searchAddon = new SearchAddon();
    terminal.loadAddon(this.fitAddon);
    terminal.loadAddon(new WebLinksAddon());
    terminal.loadAddon(this.searchAddon);

    const container = this.shadow.querySelector(
      ".terminal-container",
    ) as HTMLElement;
    if (!container) throw new Error("Terminal container not found");

    terminal.open(container);
    this.fitAddon.fit();

    return terminal;
  }

  private setupKeyboardHandling(): void {
    if (!this.terminal) return;

    let input = "";
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
        // Pseudo SIGINT signal
        // NOTE: in a real terminal, this would send a signal to the running
        // process to terminate it over the network
        input = "";
        this.writeOutput("\n^C");
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
      `Type '${AnsiCodes.Cyan}help${AnsiCodes.Reset}' for a list of commands.`,
    );
    this.prompt();
  }

  /**
   * Writes a prompt to the terminal to indicate that the terminal is ready to
   * accept user input.
   * @returns {void}
   */
  prompt(): void {
    if (!this.terminal) return;
    this.terminal.write("\x1B[1;32manon@micahkepe.com:$ \x1B[0m");
  }

  /**
   * Writes the output of a command to the terminal.
   * @param {string} output The output of the command to write to the terminal.
   * @returns {void}
   */
  writeOutput(output: string): void {
    if (output.trim() === "") {
      this.prompt();
      return;
    }

    const lines = output.split("\n"); // Split content by newlines
    lines.forEach((line) => {
      this.terminal?.writeln(line.trimEnd()); // Trim excess spaces and write each line
    });
    this.prompt();
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
