/**
 *  Right :: a -> Right(a)
 */
export const Right = v => {
  return {
    map: fn => Right(fn(v)),
    fold: (_f, g) => g(v)
  };
};

/**
 *  Left :: a -> Left(a)
 */
export const Left = v => {
  return {
    map: () => Left(v),
    fold: fn => fn(v)
  };
};

/**
 *  fromNullable :: a -> Either(a)
 */
export const fromNullable = x => (x != null ? Right(x) : Left(null));
