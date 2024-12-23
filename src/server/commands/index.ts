import { Command } from "../mock-server";
import { lsCommand } from "./ls";
import { catCommand } from "./cat";
import { helpCommand } from "./help";
import { clearCommand } from "./clear";
import { whoamiCommand } from "./whoami";
import { pwdCommand } from "./pwd";
import { rmCommand } from "./rm";
import { cdCommand } from "./cd";

export const commands: Command[] = [
  lsCommand,
  catCommand,
  helpCommand,
  clearCommand,
  whoamiCommand,
  pwdCommand,
  rmCommand,
  cdCommand,
];
