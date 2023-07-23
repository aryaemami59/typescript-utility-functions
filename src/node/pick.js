/**
 * A function version of the `Pick` utility type in TypeScript.
 * @param obj must be a valid object.
 * @param keys must be an array of keys.
 * @see {@link Pick}
 */
const pick = (obj, keys) => {
    return Object.fromEntries(keys.filter(e => e in obj).map(e => [e, obj[e]]));
};
export default pick;
