import { DataList } from "components/ui/data-list";
import { FeedSkeleton } from "components/ui/feed-skeleton";
import { PaginationBar } from "components/ui/pagination-bar";
import { useState } from "react";
import { LazyProjectCard } from "./lazy-project-card";

export type ProjectsFeedProps = {};

const PAGE_SIZE = 20;

export const ProjectsFeed: React.FC<ProjectsFeedProps> = ({}) => {
  const [offset, setOffset] = useState(0);

  return (
    <div>
      <DataList
        fallback={<FeedSkeleton count={PAGE_SIZE} />}
        renderError={(error) => <div>{error?.message}</div>}
        renderItem={LazyProjectCard}
        swrKey={`/api/projects?offset=${offset}&limit=${PAGE_SIZE}`}
      />
    </div>
  );
};
