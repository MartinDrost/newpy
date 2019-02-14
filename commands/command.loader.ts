import chalk from "chalk";
import { CommanderStatic } from "commander";
import { GenerateCommand } from "./generate.command";

export class CommandLoader {
  public static load(program: CommanderStatic): void {
    GenerateCommand.load(program);
  }
}
