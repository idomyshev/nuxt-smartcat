import { format } from "date-fns";

export const prepareDate = (value: string) => {
  return format(value.toString(), "dd/LLL/yyyy");
};
