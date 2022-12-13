#!/usr/bin/env node

import { clone, install, log, highlight, rl, color } from "modules";
import { msgs } from "./data";

let name = process.argv[2];

const start = () => {
  if (clone(name)) {
    install(name);
    log(msgs.three + highlight(msgs.cmdStart + name + msgs.cmdEnd));
  } else {
    log(msgs.error);
  }

  process.exit();
};

const askName = () =>
  rl.question(color(msgs.one), (answer) => {
    name = answer;
    log(msgs.twoStart + answer + msgs.twoEnd);
    rl.close();
    start();
  });

if (name) {
  log(msgs.twoStart + name + msgs.twoEnd);
  start();
} else {
  askName();
}
