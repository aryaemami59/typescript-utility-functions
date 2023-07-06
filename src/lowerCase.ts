/**
 * A typescript helper function that improves upon the native `String.toLowerCase`
 * @param str String whose letters are going to be converted to lowercase.
 * @see {@link String.toLowerCase}
 */
const lowerCase = <const S extends string>(str: S): Lowercase<S> => {
  return str.toLowerCase() as Lowercase<S>;
};

export default lowerCase;
