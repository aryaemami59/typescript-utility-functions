import objectEntries from "../objectEntries";

describe("json stringify", () => {
  it("pass", () => {
    expect(objectEntries({ a: "ar", b: 2, c: "cc" })).toEqual([
      ["a", "ar"],
      ["b", 2],
      ["c", "cc"],
    ]);
  });
});
