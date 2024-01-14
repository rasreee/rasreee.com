import clsx from "clsx";

import { cn } from "lib/cn";
import { calc, cssVar } from "lib/css";

import { Header } from "./header";

const headerHeight = cssVar("header-height");

export const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="inset-0 min-h-screen py-3 md:py-4">
      <Header />
      <div
        className={clsx("layout", "flex flex-1 flex-col pb-12")}
        style={{
          marginTop: calc(`-1 * ${headerHeight}`),
          paddingTop: headerHeight,
        }}
      >
        {children}
      </div>
    </main>
  );
};

type PageHeaderProps = {
  title: string;
  description?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="space-y-2 py-2">
      <h1 className="text-3xl font-bold md:text-4xl 2xl:text-5xl">{title}</h1>
      {description && (
        <p className="max-w-[30ch] pt-1 text-base text-hint md:max-w-[40ch] md:pt-3 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

type PageSectionProps = React.PropsWithChildren<{ className?: string }>;

export const PageSection: React.FC<PageSectionProps> = ({
  children,
  className,
}) => {
  return (
    <section className={cn("mt-8 md:mt-16", className)}>{children}</section>
  );
};
