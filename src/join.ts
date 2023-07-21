import type { Join, JoinableItem } from "@aryaemami59/ts-util-types";

const join = <
  const T extends readonly JoinableItem[],
  const D extends string = ",",
>(
  array: T,
  separator?: D
): Join<T, D> => {
  return array.join(separator) as Join<T, D>;
};

export default join;
