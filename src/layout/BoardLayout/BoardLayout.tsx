import { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import  HeaderBoard from '../../component/Header/Header';
import { Outlet } from 'react-router-dom';


const { Sider, Content } = Layout;
const BoardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <HeaderBoard/>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>        
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>         
          <Content
            style={{
              background: colorBgContainer
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default BoardLayout;
