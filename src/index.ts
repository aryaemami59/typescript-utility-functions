import type { AnyObject } from "@aryaemami59/ts-util-types";

/**
 * A typescript helper function that improves upon the native `Object.keys` method.
 * @template {Record<string, unknown>} T must be a valid object.
 * @param {T} obj Object whose keys are returned as an array.
 * @returns {(keyof T)[]}
 */
export const objectKeys = <const T extends AnyObject>(obj: T): (keyof T)[] =>
  Object.keys(obj) as (keyof T)[];

/**
 * Takes a string and returns the same string with the first letter capitalized
 * @template {string} S must be a valid string.
 * @param {S} str String whose first letter is going to be capitalized.
 * @returns {Capitalize<S>}
 */
export const capitalize = <const S extends string>(str: S): Capitalize<S> =>
  /**
   * @type {Capitalize<S>}
   */
  (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<S>;
