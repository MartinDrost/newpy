import { CommanderStatic, Command } from "commander";
import { GenerateAction } from "../actions/generate.action";
import chalk from "chalk";
import { mainTemplate } from "../templates/main.template";
import { readmeTemplate } from "../templates/readme.template";
import { requirementsTemplate } from "../templates/requirements.template";
import { gitignoreTemplate } from "../templates/gitignore.template";
import { gitkeepTemplate } from "../templates/gitkeep.template";

export class GenerateCommand {
  public static load(program: CommanderStatic) {
    program
      .command("generate [folder]")
      .alias("g")
      .description("Sets up a new python project.")
      .action(async (folder: string = ".", command: Command) => {
        [folder, `${folder}/output`, `${folder}/resources`].map(dir =>
          GenerateAction.generateDirectory(dir)
        );
        [
          { path: `${folder}/main.py`, content: mainTemplate },
          { path: `${folder}/readme.md`, content: readmeTemplate },
          { path: `${folder}/requirements.txt`, content: requirementsTemplate },
          { path: `${folder}/.gitignore`, content: gitignoreTemplate },
          { path: `${folder}/output/.gitkeep`, content: gitkeepTemplate },
          { path: `${folder}/resources/.gitkeep`, content: gitkeepTemplate }
        ].map(item => GenerateAction.generateFile(item.path, item.content));

        console.log(chalk.green(`Successfully generated your python project!`));
      });
  }
}
