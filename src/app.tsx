import { Space, Layout, Divider, Typography } from 'antd';

import { AddTask, Task } from './components';
import { useTasks } from './hooks';
import './app.css';

const { Content } = Layout;

export const App = () => {
  const { tasks, addTask, removeTask, changeStatus } = useTasks();

  return (
    <Layout style={{ height: '100%' }}>
      <Content>
        <Typography.Title style={{ textAlign: 'center' }} level={3}>
          Webpack PWA: Todo List
        </Typography.Title>
        <Divider />
        <Space direction="vertical" style={{ width: '100%', padding: '0 5rem' }}>
          <AddTask onAdd={addTask} />
          <Space size={12} direction="vertical" style={{ width: '100%' }}>
            {tasks?.map((task) => (
              <Task key={task.id} task={task} onRemove={removeTask} onStatusChange={changeStatus} />
            ))}
          </Space>
        </Space>
      </Content>
    </Layout>
  );
};
