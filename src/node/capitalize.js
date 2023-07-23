/**
 * Takes a string and returns the same string with the first letter converted to uppercase. The function version of the native `Capitalize` utility type in TypeScript.
 * @param str String whose first letter is going to be capitalized.
 * @see {@link Capitalize}
 */
const capitalize = (str) => (str.charAt(0).toUpperCase() + str.slice(1));
export default capitalize;
