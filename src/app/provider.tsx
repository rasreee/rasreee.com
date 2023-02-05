"use client";
import { Analytics } from "@vercel/analytics/react";
import { getConfig } from "config/get-config";
import fetcher from "lib/fetcher";
import type { PropsWithChildren } from "react";
import type { SkeletonThemeProps } from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import type { SWRConfiguration } from "swr";
import { SWRConfig } from "swr";
import { AppContext } from "./context";

const swrConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: false,
  revalidateIfStale: false,
  revalidateOnReconnect: false,
};

const skeletonTheme: SkeletonThemeProps = {
  baseColor: "#171717",
  borderRadius: "0.25rem",
  height: "6rem",
  highlightColor: "#1b1b1b",
};

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const value = { config: getConfig() };

  return (
    <AppContext.Provider value={value}>
      <SWRConfig value={swrConfig}>
        <SkeletonTheme {...skeletonTheme}>{children}</SkeletonTheme>
      </SWRConfig>
      <Analytics />
    </AppContext.Provider>
  );
};

export default AppProvider;
