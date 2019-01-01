const Box = v => {
  return {
    map: fn => Box(fn(v)),
    inspect: () => `Box(${v})`,
    fold: fn => fn(v)
  };
};

export const of = v => Box(v);

Box.of = of;

export default Box;
