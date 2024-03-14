const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

// mock말고 stub를 사용하면 더 효율적

// productService를 호출했을 때 product_client도 같이 테스트가 되기 때문에
// unit test가 되지 않음 그래서 mock 데이터를 만들어줘야 함
jest.mock("../product_client");

describe("ProductService", () => {
  // productClient 안의 fetchItems 함수를 사용하지 않기 때문에 mock fn를 만들어 줌
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "Banana", available: false },
  ]);
  // ProductClient class 내에 fetchItems 함수를 테스트코드로 교체
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });
});
