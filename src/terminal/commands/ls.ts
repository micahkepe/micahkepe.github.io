import { Terminal } from "@xterm/xterm";
import { Directory } from "../file-system";

export function lsCommand(
  terminal: Terminal,
  pwd: Directory,
  args: string[],
): void {
  const items = pwd.children.map((child) => child.name).join("\t");
  terminal.writeln(items || "No files or directories.");
}
