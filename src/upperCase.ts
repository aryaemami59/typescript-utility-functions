/**
 * A typescript helper function that improves upon the native `String.toUpperCase`
 * @param str String whose letters are going to be converted to toUpperCase.
 * @see {@link String.toUpperCase}
 */
const upperCase = <const S extends string>(str: S): Uppercase<S> => {
  return str.toUpperCase() as Uppercase<S>;
};

export default upperCase;
