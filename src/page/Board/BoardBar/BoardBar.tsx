import { Col, Row, Flex, Button, Dropdown, Avatar, Tooltip, Typography, Menu } from "antd";
import style from './BoardBar.module.scss';
import classNames from "classnames/bind";
import { FaRegStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { AntDesignOutlined } from '@ant-design/icons';
import { MdOutlineRocket, MdOutlineTableView } from "react-icons/md";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { UserOutlined } from '@ant-design/icons';
import { Link, useParams } from "react-router-dom";
import { URL } from "../../../utils/url";
import CustomDropdow from "../../../component/DropDow/Dropdow";
import CustomPop from "../../../component/PopConfirm/PopConfirm";

const cx = classNames.bind(style);
const { Title, Text } = Typography


const BoardBar = () => {
  const { id } = useParams()
  return (
    <>
      <Row justify='space-around' className={cx('board-bar')}>
        <Col span={10}>
          <Flex align="center" gap={15}>
            <Title level={4} style={{ margin: "8px" }} editable>Tên bảng</Title>
            <FaRegStar size={18} />
            <IoPeople size={18} />
            <Link to={URL.BOARD + id}>
              <Button type="text">
                <Text strong>Bảng</Text>
              </Button>
            </Link>
            <Link to={URL.BOARD + id + "/table"}>
              <Button type="text">
                <Text strong>Hàng</Text>
              </Button>
            </Link>
            <Link to={URL.BOARD + id + "/calender"}>
              <Button type="text">
                <Text strong>Lịch</Text>
              </Button>
            </Link>
          </Flex>
        </Col>
        <Col span={13}>
          <Flex justify="end" align="center" gap={5}>
            <Dropdown trigger={['click']}>
              <Button type="text" shape="circle">
                <MdOutlineRocket size={18} />
              </Button>
            </Dropdown>
            <Dropdown trigger={['click']}>
              <Button type="text" shape="circle">
                <AiTwotoneThunderbolt size={18} />
              </Button>
            </Dropdown>
            <Dropdown trigger={['click']}>
              <Button type="text">
                <IoFilterSharp size={18} />
                <Text strong>Bộ lọc</Text>
              </Button>
            </Dropdown>
            <Avatar.Group>
              <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </Tooltip>
              <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </Tooltip>
            </Avatar.Group>
            {/* <CustomDropdow Icon={<IoIosMore size={18} />}  items={boardBarMenu}/> */}
            <CustomPop title=""
              content={
                <>
                  <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={[
                      {
                        key: '0',
                        label: <>
                          <Flex justify="center">
                            <Text strong>Menu</Text>
                          </Flex>
                        </>,
                        disabled: true
                      },
                      {
                        type: "divider"
                      },
                      {
                        key: '1',
                        label: "",
                        type:"group",
                        children: [
                          {
                            key: '0',
                            icon: <MdOutlineTableView size={18} />,
                            label:
                              <>
                                <Text>Thông tin về bảng</Text>
                              </>,
                          },
                          {
                            key: '1',
                            icon: <MdOutlineTableView size={18} />,
                            label:
                              <>
                                <Text>Cài đặt</Text>
                              </>,
                          },
                          {
                            key: '2',
                            icon: <MdOutlineTableView size={18} />,
                            label:
                              <>
                                <Text>Đóng bảng</Text>
                              </>,
                          },
                          {
                            key: '3',
                            icon: <MdOutlineTableView size={18} />,
                            label:
                              <>
                                <Text>Rời bảng</Text>
                              </>,
                          },
                        ]
                      }

                    ]}
                  />
                </>
              }>
              <Button type="text" shape="circle">
                <IoIosMore size={18} />
              </Button>
            </CustomPop>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default BoardBar;
