import { FC } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Alert, Dropdown } from 'antd';

import { ITask, TaskStatus } from '../types';

const taskTypeProvider = new Map<TaskStatus, 'success' | 'info' | 'warning' | 'error'>([
  [TaskStatus.Success, 'success'],
  [TaskStatus.Pending, 'info'],
  [TaskStatus.InProgress, 'warning'],
]);

const menuItems = [
  {
    key: 'REMOVE',
    label: 'Remove task',
  },
  {
    key: TaskStatus.Pending,
    label: 'Change Status to Pending',
  },
  {
    key: TaskStatus.InProgress,
    label: 'Change Status to In Progress',
  },
  {
    key: TaskStatus.Success,
    label: 'Change Status to Success',
  },
];

interface IProps {
  task: ITask;
  onRemove(id: number): void;
  onStatusChange(id: number, status: TaskStatus): void;
}

export const Task: FC<IProps> = ({ task, onRemove, onStatusChange }) => {
  const { title, description, status, id } = task;
  const type = taskTypeProvider.get(status);

  const items = menuItems.filter(({ key }) => key !== status);

  const onItemClick = (event: { key: string }) => {
    if (event.key === 'REMOVE') {
      onRemove(id);
    } else {
      onStatusChange(id, event.key as TaskStatus);
    }
  };

  return (
    <Alert
      message={title}
      description={description}
      type={type}
      showIcon
      action={
        <Dropdown trigger={['click']} menu={{ items, onClick: onItemClick }}>
          <MoreOutlined />
        </Dropdown>
      }
    />
  );
};
