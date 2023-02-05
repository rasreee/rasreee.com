import { RepoIcon } from "@primer/octicons-react";
import type { GithubRepo } from "lib/github/types";
import { LanguageMeta } from "./language-meta";
import { StarsMeta } from "./stars-meta";

type PinnedRepoCardProps = GithubRepo;

export const PinnedRepoCard: React.FC<PinnedRepoCardProps> = ({
  name,
  description,
  language,
  stars,
}) => {
  return (
    <div className="h-32 space-y-3 rounded border border-outline p-4 line-clamp-3">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <RepoIcon className="h-4 w-auto text-hint" />
          <div className="text-github-blue text-left align-middle text-base font-semibold leading-none">
            {name}
          </div>
        </div>
        {description && (
          <div className="text-left align-middle text-sm leading-normal text-hint">
            {description}
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 text-hint">
        {language && <LanguageMeta {...language} />}
        {stars > 0 && <StarsMeta stars={stars} />}
      </div>
    </div>
  );
};

export default PinnedRepoCard;
