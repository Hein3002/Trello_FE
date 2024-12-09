import { Form, FormProps, Input, Modal, Upload } from "antd"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Column } from "../../../../model/ColumnModel";
import { createBoardAPI } from "../../../../services/Board/board.sevice";
import { PlusOutlined } from '@ant-design/icons'

const ModalCreateColumn = (props: any) => {
  const { id } = useParams()
  const [background, setBackground] = useState<File | null>(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<Column>['onFinish'] = async () => {
    form
      .validateFields()
      .then(async (values: any) => {
        const formData = new FormData();
        Object.keys(values).forEach(key => {
          formData.append(key, values[key]);
        });

        if (background && typeof background !== 'string') {
          formData.append('files', background);
        }
        if (id) {
          formData.append("workspace_id", id)
        }
        const reponse = await createBoardAPI(formData)
        if (reponse.results) {
          props.fetchWorkSapceDetails()
          props.handleCancel()
        }
      })
  }
  const handleSubmit = () => {
    form.submit();
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={props.isOpenModal}
        onOk={handleSubmit}
        onCancel={props.handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          form={form}
        >
          <Form.Item<Column>
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder='Tên đăng nhập' />
          </Form.Item>
          <Form.Item<Column>
            name="status"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Email' />
          </Form.Item>

          <Form.Item<Column>
            name="background"
          >
            <Upload listType="picture-card"
              beforeUpload={(file) => {
                setBackground(file); // Set the image file to the state
                return false; // Prevent default upload behavior
              }}
            >
              <button style={{ border: 0, background: 'none' }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};


export default ModalCreateColumn
