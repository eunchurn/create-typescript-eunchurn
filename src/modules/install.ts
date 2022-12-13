import { exists } from "./exists";
import { run } from "./run";

export const install = (dest: string) =>
  exists(`${dest}/package.json`) && run("yarn", ["install", "--cwd", dest]);
