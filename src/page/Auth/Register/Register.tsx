import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { Form, Input, Typography, Button, FormProps } from "antd";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { register } from '../../../services/User/user.service';

const cx = classNames.bind(styles);
const { Title } = Typography;

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  remember?: string;
};

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
      const response = await register(values)
      if(response){
        navigate("/login")
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
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder='Tên đăng nhập' />
        </Form.Item>
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='Email' />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Mật khẩu' />
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

export default Register;
