import { getPagination } from "./pagination";

describe("pagination", () => {
  describe("getPagination(query)", () => {
    it("empty query", () => {
      expect(getPagination({})).toStrictEqual({
        limit: 10,
        offset: 0,
      });
    });

    it("with limit and offset as string", () => {
      expect(getPagination({ limit: "10", offset: "0" })).toStrictEqual({
        limit: 10,
        offset: 0,
      });
    });
  });
});
