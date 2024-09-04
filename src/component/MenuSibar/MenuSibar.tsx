import { Menu } from "antd";
import type { MenuProps } from 'antd';
import { MailOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'grp',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' }
    ],
  }
];
const MenuSibar = () => {
  return (
    <>
      <Menu
        mode="inline"
        items={items}
        style={{border: 'none'}}
      />
    </>
  );
};

export default MenuSibar;
