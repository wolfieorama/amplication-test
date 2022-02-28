import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  projectOwner?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
