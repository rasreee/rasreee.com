import type { FC, PropsWithChildren } from "react";

import { cn } from "~/lib/cn";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="space-y-2 py-2">
      <h1 className="text-3xl font-bold md:text-4xl 2xl:text-5xl">{title}</h1>
      {description && (
        <p className="text-lg md:text-xl text-hint max-w-[30ch] md:max-w-[40ch]">
          {description}
        </p>
      )}
    </div>
  );
};

type PageSectionProps = PropsWithChildren<{ className?: string }>;

export const PageSection: FC<PageSectionProps> = ({ children, className }) => {
  return (
    <section className={cn("mt-8 md:mt-16", className)}>{children}</section>
  );
};
