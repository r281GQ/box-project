import { tryCatch } from "./Either";
import fs from "fs";

const readFile = path => () => fs.readFileSync(path);

const parse = file => () => JSON.parse(file);

tryCatch(readFile("./config.json"))
  .chain(x => tryCatch(parse(x)))
  .fold(
    e => {
      console.log("error");
      console.log(e);
    },
    result => console.log(result)
  );
