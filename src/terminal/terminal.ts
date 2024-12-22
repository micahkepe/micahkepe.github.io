import { ITheme, Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { registerCommands } from "./commands";
import { initFileSystem, Directory } from "./file-system";
import { CatpuccinMochaTheme } from "./themes";
import { TermThemes } from "./themes";

/**
 * Represents a terminal emulator that provides a command-line interface to the
 * user. The terminal is initialized with a welcome message and a set of
 * commands that the user can execute. To instantiate a terminal, pass the ID of
 * the container element that will host the terminal. The constructor is
 * non-default as the xterm.js terminal requires a container element to be
 * initialized.
 */
export class TerminalComponent {
  private terminal: Terminal;
  private fitAddon: FitAddon;
  private pwd: Directory;

  // NOTE: the constructor is non-default but the initialization of the xterm
  // terminal requires a container element to be passed in and this must be done
  // before any other methods can be called on the instantiated terminal.
  // More:
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
  constructor(
    private containerId: string,
    theme?: ITheme,
  ) {
    this.terminal = new Terminal({
      cursorBlink: true,
      cursorStyle: "bar",
      theme: theme || CatpuccinMochaTheme,
      fontFamily: "JetBrains Mono",
    });

    // Addon to let the terminal fit the parennt container element from
    // `Terminal.open`
    this.fitAddon = new FitAddon();
    this.terminal.loadAddon(this.fitAddon);

    const container = document.getElementById(this.containerId);
    if (!container)
      throw new Error(`Container with ID ${this.containerId} not found`);

    const fileSystem = initFileSystem();
    this.pwd = fileSystem.root;

    this.terminal.open(container);
    this.fitAddon.fit();

    this.writeWelcomeMessage();
    this.registerCommands();
  }

  /**
   * Returns the current working directory of the terminal.
   * @returns {Directory} The current working directory.
   */
  getPwd(): Directory {
    return this.pwd;
  }

  /**
   * Sets the current working directory of the terminal.
   * @param {Directory} dir The directory to set as the current working directory.
   * @returns {void}
   */
  setPwd(dir: Directory): void {
    this.pwd = dir;
  }

  /**
   * Prints the default message that greets the user when they first launch the
   * terminal.
   * @private
   * @returns {void}
   */
  private writeWelcomeMessage(): void {
    this.terminal.writeln(`${Date().toLocaleString()}`);
    this.terminal.writeln("Welcome to Micah Kepe's terminal, the nerd shell.");
    this.terminal.writeln("Type `help` for a list of commands.");
    this.prompt();
  }

  /**
   * Instantiates a fresh file system and registers the defined user commands
   * with the terminal. After registering the commands, the terminal is prompted
   * for input.
   * @private
   * @returns {void}
   */
  private registerCommands(): void {
    registerCommands(
      this.terminal,
      () => this.getPwd(),
      () => this.prompt(),
    );
  }

  /**
   * Writes a prompt to the terminal to indicate that the terminal is ready to
   * accept user input.
   * @private
   * @returns {void}
   */
  private prompt(): void {
    this.terminal.write("\x1B[1;32m$ \x1B[0m");
  }

  /**
   * Changes the theme of the terminal emulator.
   * @param {string} theme The name of the theme to change to.
   * @returns {void}
   */
  changeTheme(theme: string): void {
    // kill the current terminal
    this.terminal.dispose();

    // get the theme object from the available themes
    // or use the default theme
    const themeObject = TermThemes.get(theme) || CatpuccinMochaTheme;

    // create a new terminal with the new theme and set the current working
    // directory
    this.terminal = new Terminal({
      cursorBlink: true,
      cursorStyle: "bar",
      theme: themeObject,
      fontFamily: "JetBrains Mono",
    });
  }
}
