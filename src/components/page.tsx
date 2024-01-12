import { cn } from "lib/cn";

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
        <p className="max-w-[30ch] pt-1 text-lg text-hint md:max-w-[40ch] md:pt-3 md:text-xl">
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
