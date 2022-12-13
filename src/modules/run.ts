import { spawnSync } from "child_process";

export const run = (cmd: string, args: ReadonlyArray<string>) =>
  spawnSync(cmd, args, { stdio: "inherit" });
