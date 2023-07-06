import type { AnyObject } from "@aryaemami59/ts-util-types";

/**
 * A typescript helper function that improves upon the native `Object.keys` method.
 * @param obj Object whose keys are returned as an array.
 * @see {@link Object.keys}
 */
const objectKeys = <const T extends AnyObject>(obj: T): (keyof T)[] =>
  Object.keys(obj) as (keyof T)[];

export default objectKeys;
