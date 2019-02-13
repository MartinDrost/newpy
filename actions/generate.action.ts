import chalk from "chalk";
import fs from "fs";
import { exec } from "child_process";
import { vscodeSettingsTemplate } from "../templates/vscodeSettings.template";

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

  public static generateVenv(folder: string) {
    console.log(chalk.yellow(`Generating virtual environment...`));
    exec(`virtualenv ${folder}/venv`, error => {
      if (error) {
        console.log(
          chalk.red(
            `Something went wrong while trying to build the virtualenv. Make sure you have virtualenv installed on your machine.`
          )
        );
      } else {
        console.log(chalk.green(`Virtual environment has been created!`));
      }
    });
  }

  public static generateVscodeSettings(folder: string) {
    GenerateAction.generateDirectory(`${folder}/.vscode`);
    GenerateAction.generateFile(
      `${folder}/.vscode/settings.json`,
      vscodeSettingsTemplate
    );
  }
}
