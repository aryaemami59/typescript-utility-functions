import arrayIntersection from "../arrayIntersection";

describe("array intersection", () => {
  const firstArray = [1, 2, 3];
  const secondArray = [2, 3, 4];

  it("pass", () => {
    expect.hasAssertions();
    expect(arrayIntersection(firstArray, secondArray)).toStrictEqual([2, 3]);
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(arrayIntersection(firstArray, secondArray)).not.toStrictEqual([1]);
  });
});
