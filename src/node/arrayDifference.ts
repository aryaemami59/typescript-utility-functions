import type { Primitive } from "@aryaemami59/ts-util-types";

/**
 * @param firstArray
 * @param secondArray
 * @returns An array with elements that are present in the first array but not in the second array.
 */
const arrayDifference = <const T extends Primitive, const U extends Primitive>(
  firstArray: readonly T[],
  secondArray: readonly U[]
): readonly Exclude<T, U>[] =>
  firstArray.filter<Exclude<T, U>>(
    (item): item is Exclude<T, U> => !secondArray.includes(item as unknown as U)
  ) satisfies readonly Exclude<T, U>[];

export default arrayDifference;
