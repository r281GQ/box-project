import { tryCatch } from "./Either";
import fs from "fs";

const readFile = path => () => fs.readFileSync(path);

const parse = file => () => JSON.parse(file);

const result = tryCatch(readFile("./config.json"))
  .chain(x => tryCatch(parse(x)))
  .fold(e => "aint the case", result => result);

console.log(result);
