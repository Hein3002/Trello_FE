import { Col, Row, Flex, Input, Button, Dropdown, Avatar } from "antd";
import { FaRegStar } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { DownOutlined } from '@ant-design/icons';
import { MdOutlineRocket } from "react-icons/md";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { UserOutlined } from '@ant-design/icons';


const BoardBar = () => {
  return (
    <>
      <Row justify='space-around'>
        <Col span={10}>
          <Flex align="center" gap={10}>
            <Input placeholder="Basic usage" variant="outlined" size="large" style={{ maxWidth: "200px" }} />
            <FaRegStar size={18} />
            <IoPeople size={18} />
            <Button>Bảng</Button>
            <Dropdown trigger={['click']}>
              <Button type="text">
                <DownOutlined />
              </Button>
            </Dropdown>
          </Flex>
        </Col>
        <Col span={13}>
          <Flex justify="end" align="center" gap={5}>
            <Dropdown trigger={['click']}>
              <Button type="text">
                <MdOutlineRocket size={18}/>
              </Button>
            </Dropdown>
            <Dropdown trigger={['click']}>
              <Button type="text">
                <AiTwotoneThunderbolt size={18} />
              </Button>
            </Dropdown>
            <Dropdown trigger={['click']}>
              <Button type="text">
                <IoFilterSharp size={18} />
                Bộ lọc
              </Button>
            </Dropdown>
            <Avatar size="small" icon={<UserOutlined />} />
            <Dropdown trigger={['click']}>
              <Button type="text">
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
