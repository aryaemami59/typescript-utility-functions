import capitalize from "../capitalize";

describe("capitalize string", () => {
  it("pass", () => {
    expect.hasAssertions();
    expect(capitalize("arya")).toBe("Arya");
    expect(capitalize("ARYA")).toBe("ARYA");
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(capitalize("arya")).not.toBe("ARYA");
    expect(capitalize("arya")).not.toBe("arya");
  });
});
