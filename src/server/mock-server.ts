/**
 * This module defines a mock server to handle requests from the terminal client.
 * However, in the future an actual server could be implemented using WebSockets
 * like in this tutorial:
 *   https://www.eddymens.com/blog/creating-a-browser-based-interactive-terminal-using-xtermjs-and-nodejs.html#how-it-works
 */
import { initFileSystem, Directory, LocalFileSystem } from "./file-system";
import { commands } from "./commands";
import { AnsiCodes } from "../ansi-codes";

/**
 * A command object that defines a command, its arguments, and the function to
 * execute when the command is called.
 * The `execute` function takes the current directory, arguments, and file system
 * as parameters and returns the output of the command.
 */
export type Command = {
  command: string;
  args: string[];
  execute: (
    currentDir?: Directory,
    args?: string[],
    fileSystem?: LocalFileSystem,
  ) => string | Promise<string | null> | null;
  description?: string;
};

/**
 * Interface for the server.
 * The server processes commands from the terminal client.
 * The `processCommand` method takes a command string and returns a Promise
 * that resolves to the output of the command.
 */
export interface IServer {
  executeCommand(command: string): Promise<string>;
}

/**
 * A mock server that processes commands from the terminal client. It emulates
 * an actual terminal backend.
 */
export class MockServer implements IServer {
  private fileSystem: LocalFileSystem | null = null;
  private currentDir: Directory | null = null;
  private cmdRegistry: Map<string, Command> = new Map();

  constructor() {
    initFileSystem()
      .then((fs) => {
        this.fileSystem = fs;
        this.currentDir = fs.root;

        // Populate the command registry
        for (const cmd of commands) {
          this.cmdRegistry.set(cmd.command, cmd);
        }
      })
      .catch((error) => {
        console.error("Failed to initialize file system:", error);
      });
  }

  /**
   * Processes a command string and returns the output of the command.
   * @param command The command string to process.
   * @returns A Promise that resolves to the output of the command.
   */
  executeCommand(command: string): Promise<string> {
    if (!this.fileSystem || !this.currentDir) {
      return Promise.resolve("Failed to initialize file system.");
    }

    const [cmd, ...args] = command.split(" ");
    const commandObj = this.cmdRegistry.get(cmd);
    if (!commandObj) {
      return Promise.resolve(
        `${AnsiCodes.Red}Command not found:${AnsiCodes.Reset} ${cmd}`,
      );
    }

    const result = commandObj.execute(this.currentDir, args, this.fileSystem);

    if (result === null) {
      return Promise.resolve(""); // Return an empty string for commands like `clear`
    }

    return Promise.resolve(result).then((output) => output || "");
  }
}
