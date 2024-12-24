import { Command, CommandResult } from "../mock-server";
import { findDirectory, LocalFileSystem } from "../file-system";

/**
 * A minimal implementation of the "cd" command. Changes the current directory.
 * Supported usage is `cd [directory]`, where `directory` is the target directory
 * and can be a relative or absolute path.
 * @param args The command arguments
 * @param fileSystem The file system
 * @returns The output of the command
 * @see {@link Command}
 * @see {@link LocalFileSystem}
 * @see {@link findDirectory}
 */
export const cdCommand: Command = {
  command: "cd",
  args: ["[directory]"],
  description: "Change the current directory",
  execute: (args?: string[], fileSystem?: LocalFileSystem): CommandResult => {
    if (!fileSystem) {
      return { output: "cd: file system not initialized.", failed: true };
    }

    // If no arguments, go to root
    if (!args || args.length === 0) {
      fileSystem.currentPath = fileSystem.root.name;
      const changeDirectoryEvent = new CustomEvent("changeDirectoryEvent", {
        detail: { newPwd: "~" },
      });
      document.dispatchEvent(changeDirectoryEvent);
      return { output: null };
    }

    const targetPath = args[0].trim();

    // Resolve path
    const resolvePath = (path: string): string => {
      if (path === ".") return fileSystem.currentPath;
      if (path === "..") {
        const parts = fileSystem.currentPath.split("/").filter(Boolean);
        if (parts.length === 0) return fileSystem.root.name; // Already at root
        parts.pop(); // Go one level up
        return "/" + parts.join("/");
      }

      if (path === "~") {
        return fileSystem.root.name;
      }

      if (path.startsWith("/")) return path; // Absolute path
      return fileSystem.currentPath === fileSystem.root.name
        ? `/${path}`
        : `${fileSystem.currentPath}/${path}`;
    };

    const resolvedPath = resolvePath(targetPath);
    const targetDir = findDirectory(fileSystem.root, resolvedPath);

    if (!targetDir) {
      return { output: `Directory not found: ${targetPath}`, failed: true };
    }

    if (!Array.isArray(targetDir.children)) {
      return { output: `${targetPath} is not a directory.`, failed: true };
    }

    // Update the current path
    fileSystem.currentPath = resolvedPath;

    // dispatch a custom event so the terminal client can update the path for the
    // user
    const newPwd = resolvedPath === "/" ? "~" : resolvedPath;
    const changeDirectoryEvent = new CustomEvent("changeDirectoryEvent", {
      detail: { newPwd },
    });

    document.dispatchEvent(changeDirectoryEvent);

    return { output: null };
  },
};
