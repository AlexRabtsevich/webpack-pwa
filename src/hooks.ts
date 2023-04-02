import { useCallback, useEffect, useState } from 'react';

import { ITask, TaskStatus } from './types';
import { TaskDatabase } from './db';

const db = new TaskDatabase();

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[] | undefined>();

  useEffect(() => {
    db.tasks.toArray().then(setTasks);
  }, []);

  const addTask = useCallback((title: string, description?: string) => {
    const newTask = {
      title,
      description,
      status: TaskStatus.Pending,
      createdAt: new Date().toISOString(),
    };

    // Generate id as auto increment
    // @ts-ignore
    db.tasks.add(newTask);
    db.tasks.toArray().then(setTasks);
  }, []);

  const removeTask = useCallback((id: number) => {
    db.tasks.delete(id);
    db.tasks.toArray().then(setTasks);
  }, []);

  const changeStatus = useCallback((id: number, status: TaskStatus) => {
    db.tasks.update(id, { status });
    db.tasks.toArray().then(setTasks);
  }, []);

  return { changeStatus, addTask, removeTask, tasks };
};
