import type { Dispatch, SetStateAction } from "react";

export type PaginationBarProps = {
  offset?: number;
  limit?: number;
  setOffset: Dispatch<SetStateAction<number>>;
};

export const PaginationBar: React.FC<PaginationBarProps> = ({
  offset = 0,
  limit = 6,
  setOffset,
}) => {
  return (
    <div className="flex items-center justify-end gap-2 py-2 font-medium">
      <button
        className="hover:enabled::text-primary hover:enabled:text-primary hover:enabled:underline hover:enabled:underline-offset-2 disabled:font-normal disabled:text-hint"
        disabled={offset === 0}
        onClick={() => setOffset((prev) => prev - limit)}
      >
        Prev
      </button>
      <button
        className="font-medium hover:enabled:text-primary hover:enabled:underline hover:enabled:underline-offset-2 disabled:font-normal disabled:text-hint"
        // disabled={offset === 0}
        onClick={() => setOffset((prev) => prev + limit)}
      >
        Next
      </button>
    </div>
  );
};
