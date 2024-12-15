import { Outlet } from 'react-router-dom';
import styles from "./BoardLayout.module.scss";
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Layout, Menu, theme, Flex, Avatar, Typography, Button } from 'antd';
import {
  UserOutlined,
} from '@ant-design/icons';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import HeaderBoard from '../../component/Header/Header';
import ChatApp from '../../component/Chat/Chat';

const cx = classNames.bind(styles);
const items = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Bảng',

  },
  {
    key: '2',
    icon: <UserOutlined />,
    label: 'Thành viên',

  },
];
const { Title } = Typography;
const { Sider, Content } = Layout;
const BoardLayout = () => {
  const [isopenChat, setIsOpenChat] = useState(false)
  const [converSation, setConverSation] = useState<any>()
  const [collapsed, setCollapsed] = useState(false);
  const handleOPenChat = (converSation:any)=> {
    setIsOpenChat(true)
    setConverSation(converSation)
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <HeaderBoard handleOPenChat={handleOPenChat}/>
      {
        isopenChat && <ChatApp converSation={converSation}/>
      }
      <Layout className={cx('layout')}>
        <Sider trigger={null} collapsible collapsed={collapsed} theme='light' width={260} className={cx('sidebar')}>
          {
            collapsed ? (
              <Flex align='center' justify='center'>
                <Button onClick={() => setCollapsed(!collapsed)} type='text' className={cx('btn')}><RiArrowDropRightLine size={30} /> </Button>
              </Flex>
            ) : (
              <Flex align='center' className={cx('sidebar-top')} gap={5}>
                <Avatar shape='circle' size="default" icon={<UserOutlined />} />
                <div>
                  <Title level={5} style={{ margin: 0 }}>
                    Trello không gian làm việc
                  </Title>
                </div>
                <Button onClick={() => setCollapsed(!collapsed)} type='text' className={cx('btn')}><RiArrowDropLeftLine size={30} /> </Button>
              </Flex>
            )
          }
          <Menu
            theme="light"
            defaultSelectedKeys={['1']}
            items={items}
            className={cx('sidebar-menu')}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              background: colorBgContainer
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default BoardLayout;
