import type { Primitive } from "@aryaemami59/ts-util-types";

import arrayDifference from "./arrayDifference";

/**
 * @param firstArray
 * @param secondArray
 * @returns An array with elements that are present in both arrays minus the common elements.
 */
const arraySymmetricDifference = <
  const T extends Primitive,
  const U extends Primitive,
>(
  firstArray: readonly T[],
  secondArray: readonly U[]
): readonly (Exclude<T, U> | Exclude<U, T>)[] =>
  arrayDifference(firstArray, secondArray).concat(
    arrayDifference(secondArray, firstArray) as unknown as ConcatArray<
      Exclude<T, U>
    >
  ) satisfies readonly (Exclude<T, U> | Exclude<U, T>)[];

export default arraySymmetricDifference;
