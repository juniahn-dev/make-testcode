// 네트워크 호출하는 것이 있다면, 따로 class로 분리를 하는 것이 좋음 왜냐하면 unit testing이 어렵기 때문
class UserClient {
  login(id, password) {
    return fetch("https://example.com/login/id+password").then((response) => {
      response.json();
    });
  }
}

module.exports = UserClient;
