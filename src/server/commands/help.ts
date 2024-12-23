import { Command } from "../mock-server";
import { commands } from "./index";
import { generateSpacerString } from "../../utils";
import { AnsiCodes } from "../../ansi-codes";

export const helpCommand: Command = {
  command: "help",
  args: [],
  description: "List all available commands",
  execute: (_, __, ___): string => {
    const commandDescriptions = commands
      .map(
        (cmd) =>
          `\t${AnsiCodes.BoldCyan}${cmd.command}${AnsiCodes.Reset}${generateSpacerString(
            10 - cmd.command.length,
          )}- ${cmd.description || "No description available"}`,
      )
      .join("\n");

    return `Available commands:\n\n${commandDescriptions}\n`;
  },
};
