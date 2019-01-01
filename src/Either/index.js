/**
 *  Right :: a -> Right(a)
 */
export const Right = v => {
  return {
    /**
     *  Either.map :: (a -> b) -> Either(b)
     */
    map: fn => Right(fn(v)),
    fold: (_f, g) => g(v),
    /**
     *  Either.chain :: (a -> Either(b)) -> Either(b)
     */
    chain: fn => fn(v)
  };
};

/**
 *  Left :: a -> Left(a)
 */
export const Left = v => {
  return {
    map: () => Left(v),
    fold: fn => fn(v),
    chain: () => Left(v)
  };
};

/**
 *  fromNullable :: a -> Either(a)
 */
export const fromNullable = x => (x != null ? Right(x) : Left(null));

export const tryCatch = fn => {
  let result;

  try {
    const s = fn();

    result = Right(s);
  } catch (e) {
    result = Left(e);
  }

  return result;
};
