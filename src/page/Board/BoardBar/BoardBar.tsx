import { Col, Row, Flex, Button, Dropdown, Avatar, Tooltip, Typography } from "antd";
import style from './BoardBar.module.scss';
import classNames from "classnames/bind";
import { FaRegStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { AntDesignOutlined } from '@ant-design/icons';
import { MdOutlineRocket } from "react-icons/md";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
const { Title, Text } = Typography


const BoardBar = () => {
  return (
    <>
      <Row justify='space-around' className={cx('board-bar')}>
        <Col span={10}>
          <Flex align="center" gap={15}>
            <Title level={4} style={{ margin: "8px" }} editable>Tên bảng</Title>
            <FaRegStar size={18} />
            <IoPeople size={18} />
            <Button type="text">
              <Link to ="/my-board">
                <Text strong>Bảng</Text>
              </Link>
            </Button>
            <Button type="text">
              <Link to ="/my-board/table">
                <Text strong>Hàng</Text>
              </Link>
            </Button>
            <Button type="text">
              <Link to ="/my-board/calender">
                <Text strong>Lịch</Text>
              </Link>
            </Button>
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
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </Tooltip>
              <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
            </Avatar.Group>
            <Dropdown trigger={['click']}>
              <Button type="text" shape="circle">
                <IoIosMore size={18} />
              </Button>
            </Dropdown>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default BoardBar;
