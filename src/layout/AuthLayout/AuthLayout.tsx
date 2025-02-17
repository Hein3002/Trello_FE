import styles from './AuthLayout.module.scss';
import classNames from 'classnames/bind';
import { Link, Outlet, useLocation } from "react-router-dom";
import { Row, Col, Typography, Flex, Button } from "antd";
import { FaTrello } from "react-icons/fa6";
import { URL } from '../../utils/url';


const { Title, Text } = Typography;
const cx = classNames.bind(styles);

const AuthLayout = () => {
  const location = useLocation();
  return (
    <div className={cx('auth-layout')}>
      <div className={cx('auth-layout-header')}>
        <Row>
          <Col span={12}>
            <Flex align='center' gap={5} >
              <FaTrello size={20} style={{ transform: "rotate(90deg)", transformOrigin: "center", color: "rgb(31, 108, 252)"}} />
              <Title level={3}> Task</Title>
            </Flex>
          </Col>
          <Col span={12}>
            <Flex align='center' justify='flex-end' gap={10}>
              {
                location.pathname == URL.LOGIN ?
                  (
                    <>
                      <Text strong>
                        Chưa có tài khoản?
                      </Text>
                      <Link to={URL.REGISTER}>
                        <Button type='primary'>
                          Đăng ký
                        </Button>
                      </Link>
                    </>
                  ) :
                  (
                    <Link to={URL.LOGIN}>
                      <Button type='primary'>
                        Đăng nhập
                      </Button>
                    </Link>
                  )
              }
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
