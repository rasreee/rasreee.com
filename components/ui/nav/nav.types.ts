import type { IRoute } from "domains/route";
import type { ComponentType } from "react";

interface NavComponentProps {
  routes: IRoute[];
}

export type NavComponent = ComponentType<NavComponentProps>;
