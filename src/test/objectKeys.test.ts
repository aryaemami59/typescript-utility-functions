import objectKeys from "../objectKeys";

describe("lowercase string", () => {
  it("get", () => {
    expect(objectKeys({ name: "arya", age: 28 })).toStrictEqual([
      "name",
      "age",
    ] as const);
  });

  it("", () => {
    expect(objectKeys({ name: "arya", age: 28 })).not.toStrictEqual([
      "name",
    ] as const);
  });
});
