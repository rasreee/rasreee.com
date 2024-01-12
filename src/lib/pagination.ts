import { toInteger } from "lib/number";
import type { Dict } from "lib/types";

export interface Pagination {
  limit?: number;
  offset?: number;
}

const DEFAULT_LIMIT = 10;

export function getPagination(query: Dict<any>): Required<Pagination> {
  return {
    limit: toInteger(query.limit, DEFAULT_LIMIT),
    offset: toInteger(query.offset, 0),
  };
}
