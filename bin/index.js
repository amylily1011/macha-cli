#!/usr/bin/env node
const program = require("commander");
//import list command
const list = require("../lib/list");
//import order command
const order = require("../lib/order");

//list command
program
  .command("list")
  .alias("ls")
  .description("List menu items")
  .action(() => {
    list();
  });

//order command
program.command("order").action(() => {
  order();
});
program.parse(process.argv);
