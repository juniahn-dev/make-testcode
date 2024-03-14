// production에 배포하는 것이 아닌 test용이라서 test 폴더에서 생성
// mock을 사용하는 것이 아니라 stub을 이용해서 내가 필요로 하는 부분만 따로 생성해서 testing
class StubProductClient {
  async fetchItems() {
    return [
      { item: "Milk", available: true },
      { item: "Banana", available: false },
    ];
  }
}

module.exports = StubProductClient;
