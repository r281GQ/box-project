import Box from "./Box";

const priceToDouble = x => x * 0.1;

const identity = x => x;

const price = Box.of(43);

console.log(price.map(priceToDouble).fold(identity));
