import pick from "../node/pick";

describe("pick function", () => {
  const testObj = { firstName: "Arya", lastName: "Emami", age: 28 };

  it("pass", () => {
    expect.hasAssertions();
    expect(pick(testObj, ["firstName"])).toStrictEqual({ firstName: "Arya" });
    expect(pick(testObj, ["firstName", "lastName"])).toStrictEqual({
      firstName: "Arya",
      lastName: "Emami",
    });
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(pick(testObj, ["firstName"])).not.toStrictEqual({ age: 28 });
  });
});
