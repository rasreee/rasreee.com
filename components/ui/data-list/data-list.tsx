import { createLogger } from "@rasri/log";
import type { ReactElement } from "react";
import React, { useEffect } from "react";
import type { Fetcher, Key, SWRConfiguration } from "swr";
import useSWR from "swr";
import type {
  ErrorRenderer,
  FallbackProp,
  IdObject,
  ItemRenderer,
  KeyGetter,
  ListRenderer,
} from "./data-list.types";
import {
  getKeyFallback,
  renderErrorFallback,
  renderItemFallback,
  renderListFallback,
} from "./data-list.utils";

const logger = createLogger("DataList");

export type DataListRenderers<
  Data extends IdObject,
  Error,
  SWRKey extends Key
> = SWRConfiguration<Data[], Error> & {
  swrKey: SWRKey;
  fetcher?: Fetcher<Data[], Key>;
  renderItem?: ItemRenderer<Data>;
  renderError?: ErrorRenderer<Error>;
  getKey?: KeyGetter<Data>;
  renderList?: ListRenderer;
  fallback?: FallbackProp;
};

export function DataList<
  Data extends IdObject,
  Error = any,
  SWRKey extends Key = Key
>({
  swrKey,
  fetcher,
  renderItem: RenderItem = renderItemFallback,
  renderError = renderErrorFallback,
  getKey = getKeyFallback,
  renderList: List = renderListFallback,
  fallback = <></>,
  ...config
}: DataListRenderers<Data, Error, SWRKey>): ReactElement {
  const { data, error, isLoading } = useSWR<Data[], Error, Key>(
    swrKey,
    fetcher || null,
    config
  );

  useEffect(() => {
    logger.debug({ data, error, isLoading });
  }, [data, error, isLoading]);

  if (isLoading || !data) {
    return fallback;
  }

  if (error) {
    return <>{renderError}</>;
  }

  return (
    <List>
      {data.map((item, index) => (
        <li key={getKey(item, index)}>
          <RenderItem {...item} />
        </li>
      ))}
    </List>
  );
}
