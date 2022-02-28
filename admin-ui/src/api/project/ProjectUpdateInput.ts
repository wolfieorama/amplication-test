import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string;
  projectOwner?: string;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
