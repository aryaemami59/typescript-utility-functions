/**
 * Will return an array with elements that are present in the first array but not in the second array.
 * @param firstArray
 * @param secondArray
 */
const arrayDifference = <T>(firstArray: T[], secondArray: T[]): T[] =>
  firstArray.filter(item => !secondArray.includes(item));

export default arrayDifference;
