import { Terminal } from "@xterm/xterm";
import { FileSystem, Directory } from "../file-system";
import { lsCommand } from "./ls";

export function registerCommands(
  terminal: Terminal,
  fileSystem: FileSystem,
  getPwd: () => Directory,
  promptCallback: () => void,
): void {
  const commands: Record<
    string,
    (terminal: Terminal, pwd: Directory, args: string[]) => void
  > = {
    ls: lsCommand,
  };

  let input = "";
  terminal.onKey(({ key, domEvent }) => {
    if (domEvent.key === "Enter") {
      terminal.write("\r\n");
      const [cmd, ...args] = input.trim().split(" ");
      if (cmd.length == 0) {
        promptCallback();
        return;
      }
      const command = commands[cmd];
      if (command) {
        const pwd = getPwd();
        command(terminal, pwd, args);
      } else {
        terminal.writeln(`Command not found: ${cmd}`);
      }
      input = "";
      promptCallback();
    } else if (domEvent.key === "Backspace") {
      if (input.length > 0) {
        input = input.slice(0, -1);
        terminal.write("\b \b");
      }
    } else {
      input += key;
      terminal.write(key);
    }
  });
}
