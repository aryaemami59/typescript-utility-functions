/**
 * Counts duplicate values in an array.
 * @param array Must be an array of either strings or numbers.
 * @returns An object where the keys are elements inside the array and the values are the amount of times they appear inside the array.
 */
const countDuplicates = (array) => {
    const counts = {};
    array.forEach(e => {
        counts[e] = (counts[e] || 0) + 1;
    });
    return counts;
};
export default countDuplicates;
