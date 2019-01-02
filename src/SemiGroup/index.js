//  associative like  1 + 1 + 1 == 1  +( 1 + 1)
export const Sum = v => {
  return {
    concat: x => x.fold(d => Sum(d + v)),
    fold: fn => fn(v),
    inspect: x => `Sum (${v})`
  };
};

export const All = v => {
  return {
    concat: x => x.fold(d => Sum(d + v)),
    fold: fn => fn(v),
    inspect: x => `Sum (${v})`
  };
};
