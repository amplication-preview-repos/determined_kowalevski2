import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  eventDate?: SortOrder;
  eventName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
