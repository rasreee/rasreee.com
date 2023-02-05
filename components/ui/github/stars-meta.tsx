import { StarIcon } from "@primer/octicons-react";
import type { FC } from "react";

type StarsMetaProps = { stars: number };

export const StarsMeta: FC<StarsMetaProps> = ({ stars }) => {
  return (
    <div className="flex items-center gap-1">
      <StarIcon className="h-4 w-auto text-current" />
      <span className="text-sm">{stars}</span>
    </div>
  );
};
