import arrayDifference from "./arrayDifference";
/**
 * Will return an array with elements that are present in both arrays except the common elements.
 * @param firstArray
 * @param secondArray
 */
const arraySymmetricDifference = (firstArray, secondArray) => arrayDifference(firstArray, secondArray).concat(arrayDifference(secondArray, firstArray));
export default arraySymmetricDifference;
