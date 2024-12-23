import { Command } from "../mock-server";
import { Directory } from "../file-system";
import { AnsiCodes } from "../../ansi-codes";

export const lsCommand: Command = {
  command: "ls",
  args: [],
  description: "List files and directories in the current directory",
  execute: (currentDir?: Directory, args?: string[]): string => {
    if (!currentDir || !Array.isArray(currentDir.children)) {
      return "No files or directories.";
    }

    // If specific argument is passed, handle accordingly
    if (args && args.length > 0) {
      const targetDirName = args[0];
      const targetDir = currentDir.children.find(
        (child): child is Directory =>
          child.name === targetDirName && "children" in child,
      );

      if (!targetDir) {
        return `Directory not found: ${targetDirName}`;
      }

      return (
        targetDir.children.map((child) => child.name).join("\t") ||
        "Empty directory."
      );
    }

    // Default behavior: List current directory contents
    return (
      currentDir.children
        .map((child) =>
          "children" in child
            ? `${AnsiCodes.Cyan}${child.name}/${AnsiCodes.Reset}`
            : `${child.name}`,
        )
        .join("\t") || "Empty directory."
    );
  },
};
