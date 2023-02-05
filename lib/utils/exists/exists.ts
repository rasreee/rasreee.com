import type { Truthy } from "lib/utility-types";

export function exists<TEntity>(entity: TEntity): entity is Truthy<TEntity> {
  return Boolean(entity);
}

export default exists;
