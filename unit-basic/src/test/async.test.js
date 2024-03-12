const fetchProduct = require("../async.js");

describe("Async", () => {
  // done 사용 시 5초정도 시간이 걸림
  // 사용하는 것 비추천
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  // return 을 사용하면 효율적이고 직관적
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milkk", price: 200 });
    });
  });

  it("async - await", async () => {
    const product = await fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async - rejects", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
