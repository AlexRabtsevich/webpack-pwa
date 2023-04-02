export enum TaskStatus {
  Success = 'SUCCESS',
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
}

export interface ITask {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: string;
}
