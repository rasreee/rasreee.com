export type Dict<TValue = unknown> = Record<string, TValue>;

export type PlainObjectKey = string | number;

export type PlainObject<
  TKey extends PlainObjectKey = PlainObjectKey,
  TValue = unknown,
> = Record<TKey, TValue>;

export type Tuple<A, B> = readonly [A, B];

export type EntryOf<O = {}> = Tuple<
  keyof O extends PlainObjectKey ? keyof O : never,
  O[keyof O]
>;
