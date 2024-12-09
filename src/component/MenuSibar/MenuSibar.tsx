import { Flex, Menu } from "antd";
import type { MenuProps } from 'antd';
import { Typography } from 'antd';
import { FaTrello  } from "react-icons/fa6";
import { FaTableList } from "react-icons/fa6"
import { MdOutlineTableView } from "react-icons/md";
import { MdOutlineTableChart } from "react-icons/md";

type MenuItem = Required<MenuProps>['items'][number];
const { Text } = Typography

const items: MenuItem[] = [
  {
    key: 'grp',
    type: 'group',
    children: [
      {
        key: '13',
        icon: <FaTrello size={18}/>,
        label:
          <>
            <Text strong>Bảng</Text>
          </>
      },

      {
        key: '14',
        icon: <MdOutlineTableChart size={20}/>,
        label:
          <>
            <Text strong>Trang trủ</Text>
          </>
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub1',
    label:
      <>
        <Flex justify="start" align="center" gap="10px">
          <img src="src/assets/image/avatar.jpg" alt="" style={{ width: "30px", height: "30px", objectFit: "cover", borderRadius: "5px" }} />
          <Text strong>Không gian làm việc</Text>
        </Flex>
      </>,
    children: [
      {
        key: '1',
        icon:<MdOutlineTableView size={18}/>,
        label:
          <>
            <Text>Bảng</Text>
          </>,
      },
      {
        key: '2',
        icon:<FaTableList size={14}/>,
        label:
          <>
            <Text>Hình</Text>
          </>,
      },
    ],
  },
];
const MenuSibar = () => {
  return (
    <>
      <Menu
        mode="inline"
        items={items}
        style={{ border: 'none' }}
      />
    </>
  );
};

export default MenuSibar;
