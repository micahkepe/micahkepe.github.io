/**
 * This module defines a mock server to handle requests from the terminal client.
 * However, in the future an actual server could be implemented using WebSockets
 * like in this tutorial:
 *   https://www.eddymens.com/blog/creating-a-browser-based-interactive-terminal-using-xtermjs-and-nodejs.html#how-it-works
 */
import { initFileSystem, Directory } from "./file-system";
import { lsCommand } from "./commands/ls";

/**
 * Interface for the server.
 * The server processes commands from the terminal client.
 * The `processCommand` method takes a command string and returns a Promise
 * that resolves to the output of the command.
 */
export interface IServer {
  processCommand(command: string): Promise<string>;
}

export class MockServer implements IServer {
  private fileSystem = initFileSystem();
  private currentDir: Directory = this.fileSystem.root;

  async processCommand(command: string): Promise<string> {
    const [cmd, ...args] = command.split(" ");
    switch (cmd) {
      case "ls":
        return lsCommand(this.currentDir, args);
      default:
        return `Command not found: ${cmd}`;
    }
  }
}
