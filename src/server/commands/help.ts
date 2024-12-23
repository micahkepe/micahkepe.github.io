import { Command } from "../mock-server";
import { commands } from "./index";

export const helpCommand: Command = {
  command: "help",
  args: [],
  description: "List all available commands",
  execute: (): string => {
    return commands
      .map((cmd) => `${cmd.command}: ${cmd.description || "No description"}`)
      .join("\n");
  },
};
