import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

import { calc, cssVar } from "@/lib/css";

import { Header } from "./header";

const headerHeight = cssVar("header-height");

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="inset-0 min-h-screen">
      <Header />
      <div
        className={clsx("layout", "flex flex-1 flex-col px-6 pb-12 tablet:px-12")}
        style={{
          marginTop: calc(`-1 * ${headerHeight}`),
          paddingTop: headerHeight,
        }}>
        {children}
      </div>
    </main>
  );
};
