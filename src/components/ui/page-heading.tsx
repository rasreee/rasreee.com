import { useCurrentRoute } from "lib/hooks/use-current-route";
import Link from "next/link";

/**
 * NOTE Must export in order for tailwind to process it as content and
 * for hot reload to work properly when editing the classes
 */
export function PageHeading(props: { title: string; description?: string }) {
  const currentRoute = useCurrentRoute();

  return (
    <section className="py-8 desktop:py-16">
      <h1>{props.title}</h1>
      {props.description && (
        <p className="text-base leading-relaxed aboveMobile:text-xl">
          {props.description}
        </p>
      )}
      {currentRoute !== "/" && (
        <Link
          className="my-2 inline-flex items-center py-1 text-hint hover:text-primary-400 aboveMobile:my-3"
          href="/"
        >
          <svg
            className="h-4 w-4 aboveMobile:h-5 aboveMobile:w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              fillRule="evenodd"
            />
          </svg>

          <span className="font-mono text-xs font-medium uppercase aboveMobile:text-sm aboveMobile:hover:underline aboveMobile:hover:underline-offset-2">
            Back
          </span>
        </Link>
      )}
    </section>
  );
}

export default PageHeading;
