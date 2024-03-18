const Stack = require("../stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  describe("Push function", () => {
    it("empty props", () => {
      expect(() => {
        stack.push();
      }).toThrow("Props error");
    });

    it("not number", () => {
      expect(() => {
        stack.push("1");
      }).toThrow("Props not number");
    });

    it("push", () => {
      stack.push(1);
      stack.push(3);

      expect(stack.array).toEqual([1, 3]);
    });
  });

  describe("Pop function", () => {
    it("empty array", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Array is empty");
    });

    it("pop", () => {
      stack.push(1);
      stack.push(2);
      stack.pop();

      expect(stack.array).toEqual([1]);
    });
  });

  describe("peek", () => {
    it("empty array", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Array is empty");
    });

    it("returns the last pushed item but keeps it in the stack", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.peek()).toBe(2);
      expect(stack.size()).toBe(2);
    });
  });
});
