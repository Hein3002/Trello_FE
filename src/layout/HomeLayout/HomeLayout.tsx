import { Outlet } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';
import styles from './HomeLayout.module.scss';
import classNames from "classnames/bind";
import Header from "../../component/Header/Header";
import MenuSibar from "../../component/MenuSibar/MenuSibar";

const cx = classNames.bind(styles);
const { Content, Sider } = Layout;

const HomeLayout = () => {
  return (
    <>
      <Layout className={cx('home-layout')}>
        <Header />
        <Row justify="center">
          <Col span={18}>
            <Content >
              <Layout className={cx('home-layout-content')}>
                <Sider width={260} theme='light' className={cx('home-layout-sidebar')}>
                  <MenuSibar />
                </Sider>
                <Content className={cx('home-layout-content-main')}>
                  <Outlet />
                </Content>
              </Layout>
            </Content>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default HomeLayout;
