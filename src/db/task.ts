import Dexie, { Table } from 'dexie';

import { ITask } from '../types';

const VERSION = 1;

export class TaskDatabase extends Dexie {
  public tasks!: Table<ITask, number>; // id is number in this case

  public constructor() {
    super('TaskDatabase');
    this.version(VERSION).stores({
      tasks: '++id,title,description,status,createdAt',
    });
  }
}
