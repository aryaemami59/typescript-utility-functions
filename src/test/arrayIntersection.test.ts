import arrayIntersection from "../arrayIntersection";

describe("array intersection", () => {
  const firstArray = [1, 2, 3];
  const secondArray = [2, 3, 4];

  it("pass", () => {
    expect(arrayIntersection(firstArray, secondArray)).toEqual([2, 3]);
  });

  it("fail", () => {
    expect(arrayIntersection(firstArray, secondArray)).not.toEqual([1]);
  });
});
