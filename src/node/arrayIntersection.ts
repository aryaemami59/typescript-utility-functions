import type { Primitive } from "@aryaemami59/ts-util-types";

/**
 * @param firstArray
 * @param secondArray
 * @returns An array with the elements the 2 arrays have in common.
 */
const arrayIntersection = <
  const T extends Primitive,
  const U extends Primitive,
>(
  firstArray: readonly T[],
  secondArray: readonly U[]
): readonly Extract<T, U>[] =>
  firstArray.filter<Extract<T, U>>((item): item is Extract<T, U> =>
    secondArray.includes(item as unknown as U)
  ) satisfies readonly Extract<T, U>[];

export default arrayIntersection;
