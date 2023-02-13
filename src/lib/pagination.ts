import { toInteger } from "./number";
import type { Dict } from "./types";

export interface Pagination {
  limit?: number;
  offset?: number;
}

export const DEFAULT_LIMIT = 20;

export const DEFAULT_OFFSET = 0;

export function getPagination(query: Dict<any>): Required<Pagination> {
  return {
    limit: toInteger(query["limit"], DEFAULT_LIMIT),
    offset: toInteger(query["offset"], DEFAULT_OFFSET),
  };
}
