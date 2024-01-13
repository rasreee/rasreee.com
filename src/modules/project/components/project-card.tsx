"use client";

import Link from "next/link";
import { RepoIcon } from "@primer/octicons-react";

import { LanguageMeta } from "modules/github/components/language-meta";
import { StarsMeta } from "modules/github/components/stars-meta";
import type { Project } from "modules/project/types";

export type ProjectCardProps = Project;

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  gitUrl,
  demoUrl,
  description,
  language,
  stars,
}) => {
  return (
    <div className="border-outline aboveMobile:h-[7rem] aboveMobile:p-5 h-[6.325rem] space-y-3 rounded border p-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RepoIcon className="h-4 w-auto text-hint" />
            <Link
              className="text-github-blue hover:text-github-accent-fg aboveMobile:text-base text-left align-middle text-sm font-semibold leading-none hover:underline"
              href={gitUrl}
            >
              {title}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {gitUrl ? (
              <Link
                className="hover:text-github-accent-fg aboveMobile:text-sm text-left align-middle font-mono text-xs font-medium leading-none text-hint underline underline-offset-2"
                href={gitUrl}
              >
                code
              </Link>
            ) : null}
            {demoUrl ? (
              <Link
                className="hover:text-github-accent-fg aboveMobile:text-sm text-left align-middle font-mono text-xs font-medium leading-none text-hint underline underline-offset-2"
                href={demoUrl}
              >
                demo
              </Link>
            ) : null}
          </div>
        </div>
        {description ? (
          <div className="aboveMobile:text-sm aboveMobile:line-clamp-3 line-clamp-2 text-left align-middle text-xs leading-normal text-hint">
            {description}
          </div>
        ) : null}
      </div>
      <div className="flex items-center gap-3 text-hint">
        {language ? (
          <LanguageMeta color={language.color} name={language.name} />
        ) : null}
        {stars ? <StarsMeta stars={stars} /> : null}
      </div>
    </div>
  );
};
