import styles from './AuthLayout.module.scss';
import classNames from 'classnames/bind';
import { Link, Outlet } from "react-router-dom";
import { Row, Col, Typography, Flex, Button } from "antd";
import { FaTrello } from "react-icons/fa6";


const { Title, Text } = Typography;
const cx = classNames.bind(styles);

const AuthLayout = () => {
  return (
    <div className={cx('auth-layout')}>
      <div className={cx('auth-layout-header')}>
        <Row>
          <Col span={12}>
            <Link to = '/'>
              <Flex align='center' gap={5}>
                <FaTrello size={20} />
                <Title level={3}> Trello</Title>
              </Flex>
            </Link>
          </Col>
          <Col span={12}>
            <Flex align='center' justify='flex-end' gap={10}>
              <Text strong>
                Chưa có tài khoản?
              </Text>
              <Button type='primary'>
                Đăng ký
              </Button>
            </Flex>
          </Col>
        </Row>
      </div>
      <Row justify="center" align="middle" className={cx('auth-layout-form')}>
        <Col span={7}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
