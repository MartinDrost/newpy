#!/usr/bin/env node
import commander, { CommanderStatic } from "commander";
import { CommandLoader } from "./commands";

const bootstrap = () => {
  const program: CommanderStatic = commander;
  program.version(require("./package.json").version);
  CommandLoader.load(program);
  program.parse(process.argv);

  if (!program.args.length) {
    program.outputHelp();
  }
};

bootstrap();
