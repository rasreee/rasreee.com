import { DEFAULT_LIMIT, getPagination } from "./pagination";

describe("pagination", () => {
  describe("getPagination(query)", () => {
    test("empty query", () => {
      expect(getPagination({})).toStrictEqual({
        limit: DEFAULT_LIMIT,
        offset: 0,
      });
    });

    test("with limit and offset as string", () => {
      expect(getPagination({ limit: "10", offset: "0" })).toStrictEqual({
        limit: 10,
        offset: 0,
      });
    });
  });
});
