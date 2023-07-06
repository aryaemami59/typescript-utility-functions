import upperCase from "../upperCase";

test("lowercase string", () => {
  expect(upperCase("arya")).toBe("ARYA");
  expect(upperCase("arya")).not.toBe<"Arya">("Arya");
});
