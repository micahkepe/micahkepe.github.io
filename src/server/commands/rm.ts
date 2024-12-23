import { Command } from "../mock-server";
import { Directory } from "../file-system";

export const rmCommand: Command = {
  command: "rm",
  args: ["<file|directory>"],
  description: "Remove a file or directory",
  execute: (currentDir?: Directory, args?: string[]): string | null => {
    if (!args || args.length === 0) {
      return "Usage: rm [-r] <file|directory>";
    }

    // get target name based on whether flags passed
    const targetName = args[0].startsWith("-") ? args[1] : args && args[0];

    if (!currentDir) return "Current directory not found.";

    const targetIndex = currentDir.children.findIndex(
      (child) => child.name === targetName,
    );

    if (targetIndex === -1) {
      return `rm: ${targetName}: no such file or directory`;
    }

    // Check if target is a directory
    if (
      "children" in currentDir.children[targetIndex] &&
      currentDir.children[targetIndex].children
    ) {
      // Check if directory is empty
      // If not, return error message
      // If empty, remove directory
      if (currentDir.children[targetIndex].children.length > 0) {
        if (args[0] !== "-r") {
          return `rm: Directory not empty: ${targetName}, use -r to remove`;
        }
      } else {
        currentDir.children.splice(targetIndex, 1);
        return null;
      }
    }
    currentDir.children.splice(targetIndex, 1);
    return null;
  },
};
