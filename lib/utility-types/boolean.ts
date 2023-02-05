export type Falsey = null | undefined | false | "" | 0 | 0n;
export type Truthy<T> = T extends Falsey ? never : T;
