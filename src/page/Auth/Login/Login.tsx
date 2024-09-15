import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Form, Input, Typography, Button } from "antd";
import { FcGoogle } from "react-icons/fc";

const cx = classNames.bind(styles);
const { Title } = Typography;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const [form] = Form.useForm();

  return (
    <div className={cx('login')}>
      <Title level={2}>Welcom back!</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item>
          <Button> <FcGoogle />Tiếp tục đăng nhập bằng Google</Button>
        </Form.Item>
        <Form.Item>
          <hr />
        </Form.Item>
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='Tên Đăng Nhập' />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Mật Khẩu' />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" className={cx('btn')}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
