import { run } from "./run";
import { url } from "../data";

export const clone = (dest: string) => {
  const cmd = run("git", ["clone", "--depth=1", url, dest]);

  if (cmd.status == 0) {
    run("rm", ["-rf", `${dest}/.git`]);
    return true;
  }

  return false;
};
