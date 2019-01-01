import Box from "./Box";

const identity = x => x;

const moneyToFloat = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ""))
    .map(s => parseFloat(s));

const percentToFloat = str =>
  Box(str)
    .map(s => s.replace(/\%/g, ""))
    .map(s => parseFloat(s))
    .map(s => s * 0.01);

const applyDiscount = (money, discount) =>
  moneyToFloat(money)
    .map(value => value - percentToFloat(discount).fold(identity) * value)
    .fold(identity);

const result = applyDiscount("$4.99", "20%");

console.log(result);
