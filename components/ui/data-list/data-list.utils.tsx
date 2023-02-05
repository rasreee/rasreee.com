import type {
  ErrorRenderer,
  IdObject,
  KeyGetter,
  ListRenderer,
} from "./data-list.types";

export const renderListFallback: ListRenderer = ({ children }) => {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {children}
    </ul>
  );
};

export function renderItemFallback<Data extends IdObject>(data: Data) {
  return <div style={{}}>{data.id}</div>;
}

export const renderErrorFallback: ErrorRenderer = (error) => {
  return <>{JSON.stringify(error)}</>;
};

export const getKeyFallback: KeyGetter = (data, index) => {
  return `item_${data.id}_${index}`;
};
