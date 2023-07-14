import arrayDifference from "../arrayDifference";

describe("array difference", () => {
  const firstArray = [1, 2, 3];
  const secondArray = [2, 3, 4];

  it("pass", () => {
    expect.hasAssertions();
    expect(arrayDifference(firstArray, secondArray)).toStrictEqual([1]);
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(arrayDifference(firstArray, secondArray)).not.toStrictEqual([2, 3]);
  });
});
