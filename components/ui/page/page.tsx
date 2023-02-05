import type { MetaProps } from "components/ui/page/meta";
import Meta from "components/ui/page/meta";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import Header from "./header";

export interface PageProps extends MetaProps {
  children: ReactNode;
}

export function Page({ children, ...metaProps }: PageProps): JSX.Element {
  return (
    <>
      <Meta {...metaProps} />
      <div className="w-full px-7 py-4 aboveMobile:mx-auto aboveMobile:max-w-[80ch] aboveMobile:py-7">
        <Header />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

Page.Heading = dynamic(() => import("./page-heading"));
