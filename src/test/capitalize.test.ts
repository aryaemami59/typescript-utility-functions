import capitalize from "../capitalize";

describe("capitalize string", () => {
  it("pass", () => {
    expect(capitalize("arya")).toBe("Arya");
  });

  it("pass", () => {
    expect(capitalize("ARYA")).toBe("ARYA");
  });

  it("fail", () => {
    expect(capitalize("arya")).not.toBe("ARYA");
  });

  it("fail", () => {
    expect(capitalize("arya")).not.toBe("arya");
  });
});
