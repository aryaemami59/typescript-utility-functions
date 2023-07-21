import type { AnyObject } from "@aryaemami59/ts-util-types";

/**
 * A function version of the `Pick` utility type in TypeScript.
 * @param obj must be a valid object.
 * @param keys must be an array of keys.
 * @see {@link Pick}
 */
const pick = <const TObj extends AnyObject, const K extends keyof TObj>(
  obj: TObj,
  keys: readonly K[]
): Pick<TObj, K> => {
  return Object.fromEntries(
    keys.filter(e => e in obj).map(e => [e, obj[e]] as const)
  ) as Pick<TObj, K>;
};

export default pick;
