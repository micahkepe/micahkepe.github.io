import { Command } from "../mock-server";
import { LocalFileSystem } from "../file-system";

/**
 * The `pwd` command prints the current working directory. It takes no arguments.
 * @see {@link Command}
 * @see {@link LocalFileSystem}
 * @returns The current working directory
 */
export const pwdCommand: Command = {
  command: "pwd",
  args: [],
  description: "Print the current working directory",
  execute: (_, fileSystem?: LocalFileSystem): string => {
    return fileSystem?.currentPath || "/";
  },
};
