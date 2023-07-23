import type { AnyObject, ObjectEntries } from "@aryaemami59/ts-util-types";
/**
 * A typescript helper function that improves upon the native `Object.entries` method.
 * @param obj Must be a valid object.
 * @see {@link Object.entries}
 */
declare const objectEntries: <const TObj extends AnyObject>(obj: TObj) => ObjectEntries<TObj>;
export default objectEntries;
