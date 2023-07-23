/**
 * Will return an array with the elements the 2 arrays have in common.
 * @param firstArray
 * @param secondArray
 */
const arrayIntersection = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item));
export default arrayIntersection;
