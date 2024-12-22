import { Directory } from "../file-system";

export function lsCommand(currentDir: Directory, args: string[]): string {
  const items = currentDir.children.map((child) => child.name).join("\t");

  // TODO: Implement ls command with args
  if (args) {
    return items;
  }

  return items || "No files or directories.";
}
