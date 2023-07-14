import type { AnyObject } from "@aryaemami59/ts-util-types";
/**
 * A function version of the `Pick` utility type in TypeScript.
 * @param obj must be a valid object.
 * @param keys must be an array of keys.
 * @see {@link Pick}
 */
const pick = <const TObj extends AnyObject, K extends keyof TObj>(
  obj: TObj,
  keys: K[]
): Pick<TObj, K> => {
  const picked = {} as Pick<TObj, K>;
  keys.forEach(e => {
    picked[e] = obj[e];
  });
  return picked;
};

export default pick;
