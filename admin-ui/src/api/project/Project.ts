import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  name: string;
  projectOwner: string;
  startDate: Date | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
