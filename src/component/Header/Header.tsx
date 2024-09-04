import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Col, Row, Flex, Button, Input, Avatar, Badge, MenuProps } from "antd";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsTrello } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoHelpCircleOutline } from "react-icons/io5";
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import MenuHeader from "./MenuHeder/MenuHeader";

const cx = classNames.bind(styles);
const items: MenuProps['items'] = [
  {
    label: <Link to="work">1st menu item</Link>,
    key: '0',
  },
  {
    label: <Link to="my-board">2nd menu item</Link>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const Header = () => {
  return (
    <div className={cx('trello-header')}>
      <Row align="middle" justify="center" wrap={false}>
        <Col span={2}>
          <Flex align="center" justify="center" gap={15}>
            <BsGrid3X3Gap size={18} />
            <Link to='/'>
              <Flex align="center" gap={5}>
                <BsTrello size={18} />
                <h2 className={cx('trello-title')}>
                  Trello
                </h2>
              </Flex>
            </Link>
          </Flex>
        </Col>
        <Col span={17}>
          <Flex gap={5} align="center">
            <MenuHeader title="Các không gian làm việc" items={items} />
            <MenuHeader title="Gần đây" items={items} />
            <MenuHeader title="Đánh dấu sao" items={items} />
            <MenuHeader title="Mẫu" items={items} />
            <Button type="primary">Tạo mới</Button>
          </Flex>
        </Col>
        <Col span={5}>
          <Flex align="center" gap={10}>
            <Input placeholder="Tìm kiếm" prefix={<IoSearchOutline size={15} />} />
            <FaRegBell size={20} />
            <IoHelpCircleOutline size={28} />
            <Badge dot >
              <Avatar shape="circle" size="small" icon={<UserOutlined />} />
            </Badge>
          </Flex>
        </Col>
      </Row>
    </div >
  );
};

export default Header;
