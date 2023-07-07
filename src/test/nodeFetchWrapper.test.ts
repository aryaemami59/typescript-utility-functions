import nodeFetchWrapper from "../nodeFetchWrapper";

describe("fetch wrapper", () => {
  it("pass", async () => {
    const data = await nodeFetchWrapper("https://randomuser.me/api");
    expect(data).toHaveProperty("results");
  });

  it("fail", async () => {
    await expect(
      nodeFetchWrapper("https://randomuser.me/ap")
    ).rejects.toThrowError();
  });
});
