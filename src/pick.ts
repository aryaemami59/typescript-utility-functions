/**
 * A function version of the `Pick` utility type in TypeScript.
 * @param obj must be a valid object.
 * @param keys must be an array of keys.
 * @see {@link Pick}
 */
const pick = <const TObj extends object, const K extends keyof TObj>(
  obj: TObj,
  keys: readonly K[]
): Pick<TObj, K> => {
  const picked = {} as Pick<TObj, K>;
  keys.forEach(e => {
    picked[e] = obj[e];
  });
  return picked;
};

// const element = pick({ a: "aaa" }, ["a"]);

export default pick;
