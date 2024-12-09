import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Form, Input, Typography, Button, FormProps } from "antd";
import { FcGoogle } from "react-icons/fc";
import { login } from '../../../services/User/user.service';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const { Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
      const response = await login(values)
      if(response){
        navigate("/")
      }
  };

  return (
    <div className={cx('login')}>
      <Title level={2}>Welcom back!</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item>
          <Button> <FcGoogle />Tiếp tục đăng nhập bằng Google</Button>
        </Form.Item>
        <Form.Item>
          <hr />
        </Form.Item>
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
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
