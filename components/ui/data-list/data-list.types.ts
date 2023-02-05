import type {
  ComponentType,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from "react";

export interface IdObject {
  id: string;
}

export interface ListRenderer {
  (props: { children: ReactNode }): ReactElement;
}

export type ItemRenderer<Data extends IdObject = IdObject> =
  ComponentType<Data>;

export type ErrorRenderer<Error = any> = FunctionComponent<Error>;

export type KeyGetter<Data extends IdObject = IdObject> = (
  data: Data,
  index: number
) => string;

export type FallbackProp = ReactElement<any, any>;
