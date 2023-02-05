import { dynamicNoSSR } from "lib/utils/dynamic";

export const LazyProjectCard = dynamicNoSSR(() => import("./project-card"));
