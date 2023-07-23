import toLowerCase from "../node/toLowerCase";

describe("lowercase string", () => {
  it("pass", () => {
    expect.hasAssertions();
    expect(toLowerCase("ARYA")).toBe("arya");
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(toLowerCase("ARYA")).not.toBe("Arya");
  });
});
