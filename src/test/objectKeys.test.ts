import objectKeys from "../objectKeys";

describe("lowercase string", () => {
  it("pass", () => {
    expect.hasAssertions();
    expect(objectKeys({ name: "arya", age: 28 })).toStrictEqual([
      "name",
      "age",
    ] as const);
  });

  it("fail", () => {
    expect.hasAssertions();
    expect(objectKeys({ name: "arya", age: 28 })).not.toStrictEqual([
      "name",
    ] as const);
  });
});
