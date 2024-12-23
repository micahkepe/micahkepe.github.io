import { Command } from "../mock-server";
import { Directory } from "../file-system";

export const pwdCommand: Command = {
  command: "pwd",
  args: [],
  description: "Print the current working directory",
  execute: (currentDir?: Directory): string => {
    return currentDir ? currentDir.name : "/";
  },
};
