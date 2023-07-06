import arrayDifference from "../arrayDifference";

describe("array difference", () => {
  const firstArray = [1, 2, 3];
  const secondArray = [2, 3, 4];

  it("pass", () => {
    expect(arrayDifference(firstArray, secondArray)).toEqual([1]);
  });

  it("fail", () => {
    expect(arrayDifference(firstArray, secondArray)).not.toEqual([2, 3]);
  });
});
