/**
 * A typescript helper function that improves upon the native `String.toUpperCase`. The function version of the native `Uppercase` utility type in TypeScript.
 * @param str String whose letters are going to be converted to toUpperCase.
 * @see {@link String.toUpperCase}
 * @see {@link Uppercase}
 */
const upperCase = <const S extends string>(str: S): Uppercase<S> => {
  return str.toUpperCase() as Uppercase<S>;
};

export default upperCase;
