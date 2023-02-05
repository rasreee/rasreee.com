import { RepoIcon } from "@primer/octicons-react";
import { LanguageMeta } from "components/ui/github/language-meta";
import { StarsMeta } from "components/ui/github/stars-meta";
import type { Project } from "domains/project";
import Link from "next/link";

export const ProjectCard: React.FC<Project> = ({
  title,
  gitUrl,
  demoUrl,
  description,
  language,
  stars,
}) => {
  return (
    <div className="h-[6.325rem] space-y-3 rounded border border-outline p-4 aboveMobile:h-[7rem] aboveMobile:p-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RepoIcon className="h-4 w-auto text-hint" />
            <Link
              className="text-github-blue text-left align-middle text-sm font-semibold leading-none hover:text-github-accent-fg hover:underline aboveMobile:text-base"
              href={gitUrl}
            >
              {title}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {gitUrl && (
              <Link
                className="text-left align-middle font-mono text-xs font-medium leading-none text-hint underline underline-offset-2 hover:text-github-accent-fg aboveMobile:text-sm"
                href={gitUrl}
              >
                code
              </Link>
            )}
            {demoUrl && (
              <Link
                className="text-left align-middle font-mono text-xs font-medium leading-none text-hint underline underline-offset-2 hover:text-github-accent-fg aboveMobile:text-sm"
                href={demoUrl}
              >
                demo
              </Link>
            )}
          </div>
        </div>
        {description && (
          <div className="text-left align-middle text-xs leading-normal text-hint line-clamp-2 aboveMobile:text-sm aboveMobile:line-clamp-3">
            {description}
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 text-hint">
        {language && (
          <LanguageMeta color={language.color} name={language.name} />
        )}
        {stars && <StarsMeta stars={stars} />}
      </div>
    </div>
  );
};

export default ProjectCard;
