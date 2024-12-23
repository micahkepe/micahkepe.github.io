import { Command } from "../mock-server";

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
  execute: (): string => {
    return `
    Name: micah kepe 
    Currently: cs + data science student at Rice 
    Location: Houston, TX ⟺  Los Angeles, CA 
    Email: micahkepe@gmail.com 
    Blog: https://micahkepe.com/blog
`;
  },
};
