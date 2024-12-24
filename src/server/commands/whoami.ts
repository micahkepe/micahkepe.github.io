import { Command, CommandResult } from "../mock-server";
import { AnsiCodes } from "../../ansi-codes";

/**
 * A mock command that displays information about the author. This command does
 * not take any arguments. The functionality is loosely based on the `whoami`
 * command in Unix-like operating systems.
 * @see {@link Command}
 */
export const whoamiCommand: Command = {
  command: "whoami",
  args: [],
  description: "Display the contents of a file",
  execute: (): CommandResult => {
    return {
      output: `
    ${AnsiCodes.Blue}Name:${AnsiCodes.Reset} micah kepe    
    ${AnsiCodes.Blue}Currently:${AnsiCodes.Reset} cs + data science student at Rice    
    ${AnsiCodes.Blue}Location:${AnsiCodes.Reset} Houston, TX ⟺  Los Angeles, CA
    ${AnsiCodes.Blue}Email:${AnsiCodes.Reset} micahkepe@gmail.com
    ${AnsiCodes.Blue}Blog:${AnsiCodes.Reset} ${AnsiCodes.UnderlineCyan}https://micahkepe.com/blog${AnsiCodes.Reset}
`,
    };
  },
};
