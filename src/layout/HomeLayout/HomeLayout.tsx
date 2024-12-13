import { Outlet } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';
import styles from './HomeLayout.module.scss';
import classNames from "classnames/bind";
import Header from "../../component/Header/Header";
import MenuSibar from "../../component/MenuSibar/MenuSibar";
import { useEffect, useState } from 'react';
import {
  getWorkSpaceGuestByIdUserAPI,
  getWorkSpaceMemberByIdUserAPI
} from '../../services/WorkSpace/workSapce.service';

const cx = classNames.bind(styles);
const { Content, Sider } = Layout;

const HomeLayout = () => {
  const [workSpaceMember, setWorkSpaceMember] = useState<any[]>([])
  const [workSpaceGuest, setWorkSpaceGuest] = useState<any[]>([])
  const fetchWorkSapceMemberByUserID = async () => {
    const response = await getWorkSpaceMemberByIdUserAPI()
    if (!response.message) {
      setWorkSpaceMember(response)
    }
  }
  const fetchWorkSapceGuestByUserID = async () => {
    const response = await getWorkSpaceGuestByIdUserAPI()
    if (!response.message) {
      setWorkSpaceGuest(response)
    }
  }

  useEffect(() => {
    fetchWorkSapceMemberByUserID()
    fetchWorkSapceGuestByUserID()
  }, [])
  return (
    <>
      <Layout className={cx('home-layout')}>
        <Header />
        <Row justify="center">
          <Col span={18}>
            <Content >
              <Layout className={cx('home-layout-content')}>
                <Sider width={260} theme='light' className={cx('home-layout-sidebar')}>
                  <MenuSibar menuData={workSpaceMember ?? []} />
                </Sider>
                <Content className={cx('home-layout-content-main')}>
                  <Outlet context={{
                    workSpaceMember: workSpaceMember ?? [],
                    workSpaceGuest: workSpaceGuest ?? []
                  }} />
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
