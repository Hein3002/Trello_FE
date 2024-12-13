import { Flex } from "antd"
import type { MenuProps } from 'antd';
import { Typography } from 'antd';
import { FaTrello } from "react-icons/fa6";
import { FaTableList } from "react-icons/fa6"
import { MdOutlineTableView } from "react-icons/md";
import { MdOutlineTableChart } from "react-icons/md";
import { Link } from "react-router-dom";
import { URL } from '../../../utils/url';


type MenuItem = Required<MenuProps>['items'][number];
const { Text } = Typography


export const MenuSideBarItem = (data: any[]): MenuItem[] => [
  {
    key: 'grp',
    type: 'group',
    children: [
      {
        key: '13',
        icon: <FaTrello size={18} />,
        label:
          <>
            <Text strong>Bảng</Text>
          </>
      },

      {
        key: '14',
        icon: <MdOutlineTableChart size={20} />,
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
  ...data.map((workspace, index) => ({
    key: `sub-${index}`,
    label: (
      <>
        <Flex justify="start" align="center" gap="10px">
          <img
            src="src/assets/image/avatar.jpg"
            alt=""
            style={{
              width: '30px',
              height: '30px',
              objectFit: 'cover',
              borderRadius: '5px',
            }}
          />
          <Text strong>{workspace.workspace_name}</Text>
        </Flex>
      </>
    ),
    children: [
      {
        key: `${index}-1`,
        icon: <MdOutlineTableView size={18} />,
        label: (
          <>
            <Text>Bảng</Text>
          </>
        ),
      },
      {
        key: `${index}-2`,
        icon: <FaTableList size={14} />,
        label: (
          <>
            <Text>Hình</Text>
          </>
        ),
      },
      {
        key: `${index}-3`,
        icon: <FaTableList size={14} />,
        label: (
          <>
            <Link to={`${URL.WORKSPACE}${workspace.workspace_id}`}>
              <Text>Thành viên</Text>
            </Link>
          </>
        ),
      },
    ],
  })),
];