import lowerCase from "../lowerCase";

describe("lowercase string", () => {
  it("pass", () => {
    expect(lowerCase("ARYA")).toBe("arya");
  });

  it("fail", () => {
    expect(lowerCase("ARYA")).not.toBe("Arya");
  });
});
