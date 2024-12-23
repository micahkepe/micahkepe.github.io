import { Command } from "../mock-server";
import { lsCommand } from "./ls";
import { catCommand } from "./cat";
import { helpCommand } from "./help";
import { clearCommand } from "./clear";
import { whoamiCommand } from "./whoami";

export const commands: Command[] = [
  lsCommand,
  catCommand,
  helpCommand,
  clearCommand,
  whoamiCommand,
];
