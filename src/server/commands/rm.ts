import { Command } from "../mock-server";
import { LocalFileSystem, findDirectory } from "../file-system";

export const rmCommand: Command = {
  command: "rm",
  args: ["<file|directory>"],
  description: "Remove a file or directory",
  execute: (args?: string[], fileSystem?: LocalFileSystem): string | null => {
    if (!fileSystem || !fileSystem.currentPath) {
      return "File system not initialized.";
    }

    if (!args || args.length === 0) {
      return "Usage: rm [-r] <file|directory>";
    }

    const currentDir = findDirectory(fileSystem.root, fileSystem.currentPath);

    if (!currentDir) {
      return `Current directory not found: ${fileSystem.currentPath}`;
    }

    // Determine the target name, handling flags
    const targetName = args[0].startsWith("-") ? args[1] : args[0];

    const targetIndex = currentDir.children.findIndex(
      (child) => child.name === targetName,
    );

    if (targetIndex === -1) {
      return `rm: ${targetName}: no such file or directory`;
    }

    const target = currentDir.children[targetIndex];

    // Handle directories
    if ("children" in target && target.children) {
      if (target.children.length > 0 && args[0] !== "-r") {
        return `rm: Directory not empty: ${targetName}, use -r to remove`;
      }
    }

    // Remove the file or directory
    currentDir.children.splice(targetIndex, 1);
    return null;
  },
};
