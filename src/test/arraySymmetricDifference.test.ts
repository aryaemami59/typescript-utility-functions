import arraySymmetricDifference from "../arraySymmetricDifference";

describe("array difference", () => {
  const firstArray = [1, 2, 3];
  const secondArray = [2, 3, 4];

  it("pass", () => {
    expect.hasAssertions();
    expect(arraySymmetricDifference(firstArray, secondArray)).toStrictEqual([
      1, 4,
    ]);
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(arraySymmetricDifference(firstArray, secondArray)).not.toStrictEqual(
      [2, 3]
    );
  });
});
