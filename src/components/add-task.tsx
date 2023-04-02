import { FC, useState } from 'react';
import { Button, Input, Modal, Form, message } from 'antd';

interface IProps {
  onAdd(title: string, description: string): void;
}

export const AddTask: FC<IProps> = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageApi] = message.useMessage();
  const [form] = Form.useForm<{ title: string; description: string }>();

  return (
    <>
      <Button type="primary" ghost onClick={() => setIsOpen(true)}>
        Add task
      </Button>
      <Modal
        title="Add new task"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        okText="Add"
        onOk={() => {
          form
            .validateFields()
            .then(({ title, description }) => {
              form.resetFields();
              onAdd(title, description);
              setIsOpen(false);
            })
            .catch(() => {
              messageApi.open({
                type: 'error',
                content: 'This is an error message',
              });
            });
        }}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ padding: '1rem 0' }}
          initialValues={{ remember: true }}
          onFinish={(form) => onAdd(form.title, form.description)}
          onFinishFailed={() =>
            messageApi.open({
              type: 'error',
              content: 'This is an error message',
            })
          }
          autoComplete="off"
        >
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input title of task' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
