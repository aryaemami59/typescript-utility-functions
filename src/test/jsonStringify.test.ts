import jsonStringify from "../jsonStringify";

describe("json stringify", () => {
  it("pass", () => {
    expect(jsonStringify({ a: 2 })).toBe(`{"a":2}`);
  });

  it("pass", () => {
    expect(jsonStringify({ a: "a" })).toBe(`{"a":"a"}`);
  });
});
