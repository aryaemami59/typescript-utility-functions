import arraySymmetricDifference from "../arraySymmetricDifference";

describe("array difference", () => {
  const firstArray = [1, 2, 3];
  const secondArray = [2, 3, 4];

  it("pass", () => {
    expect(arraySymmetricDifference(firstArray, secondArray)).toEqual([1, 4]);
  });

  it("fail", () => {
    expect(arraySymmetricDifference(firstArray, secondArray)).not.toEqual([
      2, 3,
    ]);
  });
});
