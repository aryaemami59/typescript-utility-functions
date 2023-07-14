import upperCase from "../upperCase";

describe("lowercase string", () => {
  it("pass", () => {
    expect.hasAssertions();
    expect(upperCase("arya")).toBe<"ARYA">("ARYA");
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(upperCase("arya")).not.toBe<"Arya">("Arya");
  });
});
