import type { Customer } from "../types";

export default {
  recordRepresentation: (record: Customer) =>
    `${record.first_name} ${record.last_name}`,
};
