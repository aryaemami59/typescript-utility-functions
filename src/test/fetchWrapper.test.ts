import fetchWrapper from "../fetchWrapper";

describe("fetch wrapper", () => {
  it("pass", async () => {
    expect.hasAssertions();
    const data = await fetchWrapper("https://randomuser.me/api");
    expect(data).toHaveProperty("results");
  });

  it("fail", async () => {
    expect.hasAssertions();
    await expect(fetchWrapper("https://randomuser.me/ap")).rejects.toThrow(
      "rejected"
    );
  });
});
