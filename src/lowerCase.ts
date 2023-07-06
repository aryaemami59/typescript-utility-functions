/**
 * A typescript helper function that improves upon the native `String.toLowerCase`. The function version of the native `Lowercase` utility type in TypeScript.
 * @param str String whose letters are going to be converted to lowercase.
 * @see {@link String.toLowerCase}
 * @see {@link Lowercase}
 */
const lowerCase = <const S extends string>(str: S): Lowercase<S> => {
  return str.toLowerCase() as Lowercase<S>;
};

export default lowerCase;
