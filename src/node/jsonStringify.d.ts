import type { ObjectOrArray } from "@aryaemami59/ts-util-types";
/**
 * A more strictly typed version of `JSON.stringify`.
 * @param value Must be a valid object or array.
 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @see {@link JSON.stringify}
 */
declare const jsonStringify: <const TValue extends ObjectOrArray, const S extends string>(value: TValue, replacer?: (number | string)[] | null, space?: string | number) => S;
export default jsonStringify;
