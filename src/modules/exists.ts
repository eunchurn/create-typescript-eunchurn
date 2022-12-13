import fs from "fs";

export const exists = (path: string) => (fs.existsSync(path) ? true : false);
