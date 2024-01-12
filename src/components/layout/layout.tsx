import clsx from "clsx";
import type { PropsWithChildren } from "react";

import { calc, cssVar } from "lib/css";

import { Header } from "./header";

const headerHeight = cssVar("header-height");

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
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
