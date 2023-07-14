import objectEntries from "../objectEntries";

describe("object entries", () => {
  it("pass", () => {
    expect.hasAssertions();
    expect(objectEntries({ a: "ar", b: 2, c: "cc" })).toStrictEqual([
      ["a", "ar"],
      ["b", 2],
      ["c", "cc"],
    ]);
  });
});
