import { Command, CommandResult } from "../mock-server";
import { TermThemes } from "../../client/terminal/themes";

/**
 * A command to change the terminal theme.
 * @see {@link Command}
 * @see {@link TermThemes}
 */
export const themeCommand: Command = {
  command: "theme",
  args: ["theme"],
  opts: ["-ls"],
  description: "Change the terminal theme",
  execute: (args?: string[]): CommandResult => {
    if (!args || args.length !== 1) {
      return { output: "theme: Usage: theme [<theme> | -ls]", failed: true };
    }

    const availableThemes = Array.from(TermThemes.keys());

    // check for -ls flag to list available themes
    if (args[0] === "-ls") {
      return {
        output: `Available themes: ${availableThemes.join(", ")}`,
      };
    }

    // else dispatch a custom event for the theme change
    const theme = args[0];

    if (!availableThemes.includes(theme)) {
      return {
        output: `theme: Theme not found: ${theme}\nUse \`theme -ls\` to see available themes`,
        failed: true,
      };
    }

    const event = new CustomEvent("changeTerminalThemeEvent", {
      detail: { theme: theme },
    });

    document.dispatchEvent(event);
    return { output: null };
  },
};
