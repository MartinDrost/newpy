import chalk from "chalk";
import fs from "fs";

export class GenerateAction {
  public static generateDirectory(directory: string): void {
    console.log(chalk.yellow(`Creating directory ${directory}...`));

    fs.mkdirSync(directory);
  }

  public static generateFile(path: string, content: string): string {
    console.log(chalk.yellow(`Generating ${path}...`));

    fs.writeFileSync(path, content, { flag: "w" });

    return path;
  }
}
