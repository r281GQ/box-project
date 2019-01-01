import { fromNullable } from "./Either";

const COLORS = {
  red: "#ff4444",
  blue: "#3b55998",
  yellow: "#fff68f"
};

/**
 *  findColor :: Color -> String -> Either
 */
const findColor = color => name => fromNullable(color[name]);

findColor(COLORS)("red")
  .map(x => x.toUpperCase())
  .fold(x => console.log("errored " + x), y => console.log("success " + y));
