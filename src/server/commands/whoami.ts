import { Command } from "../mock-server";

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
