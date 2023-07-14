import lowerCase from "../lowerCase";

describe("lowercase string", () => {
  it("pass", () => {
    expect.hasAssertions();
    expect(lowerCase("ARYA")).toBe("arya");
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(lowerCase("ARYA")).not.toBe("Arya");
  });
});
