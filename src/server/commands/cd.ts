import { Command } from "../mock-server";
import { Directory, findDirectory } from "../file-system";

export const cdCommand: Command = {
  command: "cd",
  args: ["<directory>"],
  description: "Change the current directory",
  execute: (
    currentDir?: Directory,
    args?: string[],
    fileSystem?: { root: Directory },
  ): string | null => {
    if (!args || args.length === 0) {
      return "Usage: cd <directory>";
    }

    const targetPath = args[0].trim();
    if (!currentDir || !fileSystem) {
      return "File system not initialized.";
    }

    const resolvePath = (path: string): Directory | null => {
      if (path === ".") return currentDir; // Stay in the current directory
      if (path === "..") {
        const parts = currentDir.name.split("/").filter(Boolean);
        if (parts.length === 0) return fileSystem.root; // Already at root
        const parentPath = "/" + parts.slice(0, -1).join("/");
        return findDirectory(fileSystem.root, parentPath);
      }
      if (path.startsWith("/")) {
        // Absolute path
        return findDirectory(fileSystem.root, path);
      }
      // Relative path
      return findDirectory(currentDir, path);
    };

    const targetDir = resolvePath(targetPath);
    if (!targetDir) {
      return `Directory not found: ${targetPath}`;
    }

    if (!Array.isArray(targetDir.children)) {
      return `${targetPath} is not a directory.`;
    }

    // Update the current directory's name
    currentDir.name = targetDir.name;
    currentDir.children = targetDir.children;
    return null; // No output, handled on client
  },
};
