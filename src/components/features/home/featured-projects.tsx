import { LazyProjectCard } from "components/features/projects/lazy-project-card";
import { DataList } from "components/ui/data-list";
import { FeedSkeleton } from "components/ui/feed-skeleton";
import Link from "next/link";

const FeaturedProjects: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h3>Featured Projects</h3>
        <Link
          className="inline-flex items-center py-1 font-mono text-xs font-medium uppercase text-hint underline underline-offset-4 hover:text-primary-400"
          href="/projects"
        >
          View all
        </Link>
      </div>
      <DataList
        fallback={<FeedSkeleton count={3} />}
        getKey={(data) => `project-${data.id}`}
        renderError={(error) => <div>{error?.message}</div>}
        renderItem={LazyProjectCard}
        swrKey="/api/projects?featured=true&limit=3"
      />
    </section>
  );
};

export default FeaturedProjects;
