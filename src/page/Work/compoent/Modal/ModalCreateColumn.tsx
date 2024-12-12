import { Form, FormProps, Input, Modal, Upload } from "antd"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createBoardAPI } from "../../../../services/Board/board.sevice";
import { PlusOutlined } from '@ant-design/icons'
import { Board } from "../../../../model/BoardModel";

const ModalCreateColumn = (props: any) => {
  const { id } = useParams()
  const [background, setBackground] = useState<File | null>(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<Board>['onFinish'] = async () => {
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
        console.log(reponse)
        if (reponse) {
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
        title="Tạo bảng"
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
          <Form.Item<Board>
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder='Tên bảng' />
          </Form.Item>
          <Form.Item<Board>
            name="status"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Trạng thái' />
          </Form.Item>

          <Form.Item<Board>
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
