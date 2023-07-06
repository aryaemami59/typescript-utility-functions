import upperCase from "../upperCase";

describe("lowercase string", () => {
  it("pass", () => {
    expect(upperCase("arya")).toBe("ARYA");
  });

  it("fail", () => {
    expect(upperCase("arya")).not.toBe<"Arya">("Arya");
  });
});
