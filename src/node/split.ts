import type { Split } from "@aryaemami59/ts-util-types";

const split = <const S extends string, const D extends string>(
  str: S,
  separator: D
): Split<S, D> => {
  return str.split(separator) as Split<S, D>;
};

export default split;
