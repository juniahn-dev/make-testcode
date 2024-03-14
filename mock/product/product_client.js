class ProductClient {
  fetchItems() {
    return fetch("https://example.com/login/id+password").then((response) => {
      response.json();
    });
  }
}

module.exports = ProductClient;
