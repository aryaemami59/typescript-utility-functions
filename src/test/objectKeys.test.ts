import objectKeys from "../objectKeys";

describe("lowercase string", () => {
  it("pass", () => {
    expect(objectKeys({ name: "arya", age: 28 })).toStrictEqual([
      "name",
      "age",
    ] as const);
  });

  it("fail", () => {
    expect(objectKeys({ name: "arya", age: 28 })).not.toStrictEqual([
      "name",
    ] as const);
  });
});
