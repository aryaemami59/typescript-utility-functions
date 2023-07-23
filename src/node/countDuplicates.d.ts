/**
 * Counts duplicate values in an array.
 * @param array Must be an array of either strings or numbers.
 * @returns An object where the keys are elements inside the array and the values are the amount of times they appear inside the array.
 */
declare const countDuplicates: <const T extends PropertyKey>(array: T[]) => Record<T, number>;
export default countDuplicates;
