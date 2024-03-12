const Calculator = require("../calculator.js");

// 관련된 함수를 묶는 것
describe("Calculator", () => {
  let calculator;

  // test 실행 전 실행하는 함수
  beforeEach(() => {
    calculator = new Calculator();
  });

  it("init with 0", () => {
    expect(calculator.value).toBe(0);
  });

  it("set number", () => {
    calculator.set(4);

    expect(calculator.value).toBe(4);
  });

  describe("adds", () => {
    it("add should throw error if value is greater than 100", () => {
      expect(() => {
        calculator.add(101);
      }).toThrow("Value can not be greater than 100");
    });

    it("add function", () => {
      calculator.set(4);
      calculator.add(3);

      expect(calculator.value).toBe(7);
    });
  });

  it("subtract function", () => {
    calculator.set(4);
    calculator.subtract(2);

    expect(calculator.value).toBe(2);
  });

  it("multiply function", () => {
    calculator.set(4);
    calculator.multiply(3);

    expect(calculator.value).toBe(12);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      calculator.divide(0);

      expect(calculator.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      calculator.set(1);
      calculator.divide(0);

      expect(calculator.value).toBe(Infinity);
    });

    it("divide", () => {
      calculator.set(4);
      calculator.divide(2);

      expect(calculator.value).toBe(2);
    });
  });

  it("clear calculator", () => {
    calculator.clear();

    expect(calculator.value).toBe(0);
  });
});
