import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { registerCommands } from "./commands";
import { initFileSystem, Directory } from "./file-system";

/**
 * Represents a terminal emulator that provides a command-line interface to the
 * user. The terminal is initialized with a welcome message and a set of
 * commands that the user can execute.
 */
export class TerminalComponent {
  private terminal: Terminal;
  private fitAddon: FitAddon;
  private pwd: Directory;

  constructor(private containerId: string) {
    this.terminal = new Terminal({
      cursorBlink: true,
      cursorStyle: "bar",
    });
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
    this.registerCommands(fileSystem);
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

  private registerCommands(fileSystem: { root: Directory }): void {
    registerCommands(
      this.terminal,
      fileSystem,
      () => this.getPwd(),
      () => this.prompt(),
    );
  }

  private prompt(): void {
    this.terminal.write("\x1B[1;32m$ \x1B[0m");
  }
}
