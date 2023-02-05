import type { PropsWithChildren } from "react";
import Skeleton from "react-loading-skeleton";

function Box({ children }: PropsWithChildren<unknown>) {
  return (
    <div
      style={{
        display: "block",
        lineHeight: 1,
        padding: "0",
        marginBottom: "1.125rem",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

export const FeedSkeleton: React.FC<{ count?: number }> = ({ count = 5 }) => {
  return <Skeleton count={count} wrapper={Box} />;
};
