import { dynamicNoSSR } from "lib/dynamic";

export const LazyProjectCard = dynamicNoSSR(() => import("./project-card"));
