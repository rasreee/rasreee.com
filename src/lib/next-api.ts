import type { Pagination } from "lib/pagination";
import type { NextApiRequest, NextApiResponse } from "next";

interface IError {
  name?: string;
  message?: string;
  stack?: string;
  cause?: unknown;
  code?: string;
}

export type ApiResponse<TData = {}, TError = IError> = NextApiResponse<
  TData | TError
>;

export type ApiRequest<Query = undefined> = NextApiRequest &
  Query extends undefined
  ? { query: never }
  : {
      query: Query & Pagination;
    };
