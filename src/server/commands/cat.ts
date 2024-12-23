import { Command } from "../mock-server";
import { File, LocalFileSystem, findDirectory } from "../file-system";

/**
 * A minimal implementation of the "cat" command. Displays the contents of a file.
 * Supported usage is `cat <file>`, where `file` is the target file and can be a
 * relative or absolute path. Does not support flags or options, and does not
 * provide syntax highlighting or pagination.
 * @param args The command arguments
 * @param fileSystem The file system
 * @returns The output of the command
 * @see {@link Command}
 * @see {@link LocalFileSystem}
 * @see {@link findDirectory}
 * @see {@link File}
 */
export const catCommand: Command = {
  command: "cat",
  args: ["<file>"],
  description: "Display the contents of a file",
  execute: (args?: string[], fileSystem?: LocalFileSystem): string => {
    if (!fileSystem || !fileSystem.currentPath) {
      return "File system not initialized.";
    }

    if (!args || args.length === 0) {
      return "Usage: cat <file>";
    }

    const targetPath = args[0];

    // Resolve the path
    const resolvePath = (currentPath: string, targetPath: string): string => {
      if (targetPath.startsWith("/")) {
        return targetPath; // Absolute path
      }
      return currentPath === "/"
        ? `/${targetPath}` // Relative path from root
        : `${currentPath}/${targetPath}`; // Relative path
    };

    const resolvedPath = resolvePath(fileSystem.currentPath, targetPath);

    // Find the directory containing the target file
    const parentDirPath = resolvedPath.split("/").slice(0, -1).join("/") || "/";
    const parentDir = findDirectory(fileSystem.root, parentDirPath);

    if (!parentDir) {
      return `Directory not found: ${parentDirPath}`;
    }

    // Find the file in the resolved directory
    const fileName = resolvedPath.split("/").pop();
    const targetFile = parentDir.children.find(
      (child): child is File => child.name === fileName && "content" in child,
    );

    if (!targetFile) {
      return `File not found: ${targetPath}`;
    }

    // Ensure the content is displayed cleanly without extra spacing
    return targetFile.content.trim();
  },
};
