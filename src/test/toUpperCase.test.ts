import toUpperCase from "../node/toUpperCase";

describe("lowercase string", () => {
  it("pass", () => {
    expect.hasAssertions();
    expect(toUpperCase("arya")).toBe<"ARYA">("ARYA");
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(toUpperCase("arya")).not.toBe<"Arya">("Arya");
  });
});
