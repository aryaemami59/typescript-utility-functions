import fetchWrapper from "../fetchWrapper";

describe("fetch wrapper", () => {
  it("pass", async () => {
    const data = await fetchWrapper("https://randomuser.me/api");
    expect(data).toHaveProperty("results");
  });

  it("fail", async () => {
    await expect(
      fetchWrapper("https://randomuser.me/ap")
    ).rejects.toThrowError();
  });
});
