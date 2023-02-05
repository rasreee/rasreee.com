import type { IConfig } from "config/config.types";
import { createContext, useContext } from "react";

export type AppContextType = {
  config: IConfig;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = (): AppContextType => {
  const value = useContext(AppContext);
  if (!value) {
    throw new Error(`AppContext is not available in the component tree.`);
  }
  return value;
};

export const useAppConfig = (): IConfig => {
  return useApp().config;
};
