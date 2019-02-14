#!/usr/bin/env node
import commander, { CommanderStatic } from "commander";
import { CommandLoader } from "./commands";

const bootstrap = () => {
  const program: CommanderStatic = commander;
  program.version(require("./package.json").version);
  program.name(
    Object.keys(require("./package.json").bin)[0] ||
      require("./package.json").name
  );

  CommandLoader.load(program);
  program.parse(process.argv);

  if (!program.args.length) {
    program.outputHelp();
  }
};

bootstrap();
