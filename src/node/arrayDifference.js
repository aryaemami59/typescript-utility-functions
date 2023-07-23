/**
 * Will return an array with elements that are present in the first array but not in the second array.
 * @param firstArray
 * @param secondArray
 */
const arrayDifference = (firstArray, secondArray) => firstArray.filter(item => !secondArray.includes(item));
export default arrayDifference;
