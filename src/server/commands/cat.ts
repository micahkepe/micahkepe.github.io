import { Command } from "../mock-server";
import { Directory, File } from "../file-system";

export const catCommand: Command = {
  command: "cat",
  args: ["<file>"],
  description: "Display the contents of a file",
  execute: (currentDir?: Directory, args?: string[]): string => {
    if (!args || args.length === 0) {
      return "Usage: cat <file>";
    }

    const fileName = args[0];
    const targetFile = currentDir?.children.find(
      (child): child is File => child.name === fileName && "content" in child,
    );

    if (!targetFile) {
      return `File not found: ${fileName}`;
    }

    // Ensure the content is displayed cleanly without extra spacing
    return targetFile.content.trim();
  },
};
