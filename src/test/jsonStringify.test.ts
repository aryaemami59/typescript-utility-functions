import jsonStringify from "../node/jsonStringify";

describe("json stringify", () => {
  it("pass", () => {
    expect.hasAssertions();
    expect(jsonStringify({ a: 2 })).toBe(`{"a":2}`);
  });

  it("pass second", () => {
    expect.hasAssertions();
    expect(jsonStringify({ a: "a" })).toBe(`{"a":"a"}`);
  });
});
