import { toInteger } from "./number";

describe("number", () => {
  describe("toInteger", () => {
    test("string number", () => {
      expect(toInteger("1")).toBe(1);
    });
  });
});
