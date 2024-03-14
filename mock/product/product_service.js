// ProductClient를 직접 import하는 것이 아니라 productClient를 inject하여서 사용하면 범용적으로 사용할 수 있음
class ProductService {
  constructor(productClient) {
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
