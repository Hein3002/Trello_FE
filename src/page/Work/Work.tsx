import classNames from "classnames/bind";
import styles from "./Work.module.scss";
import { UserOutlined } from '@ant-design/icons';
import { CiLock } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Avatar, Typography, Button, Row, Col, Select, Flex, Input } from 'antd';
import Table from "../../component/Table/Table";

const { Title, Text } = Typography;
const cx = classNames.bind(styles);


const Work = () => {
  return (
    <>
      <div className={cx('work-page')}>
        <Row justify='center'>
          <Col span={16}>
            <div className={cx('work-page-top')}>
              <div className={cx('user')}>
                <Avatar shape="square" size={64} icon={<UserOutlined />} className={cx('user-icon')} />
                <div className={cx('user-profile')}>
                  <Title editable level={4}>Trello không gian làm việc</Title>
                  <Text strong> <CiLock /> Riêng tư</Text>
                </div>
              </div>
              <Button type="primary"><IoPersonAddOutline />Mời các thành viên vào không gian làm việc</Button>
            </div>
          </Col>
        </Row>
        <hr />
        <Row justify='center'>
          <Col span={22}>
            <Title level={4}
              style={{ margin: '0 0 30px' }}>
              Bảng
            </Title>
            <Flex vertical gap={30}>
              <Flex justify="space-between">
                <Flex gap={10}>
                  <Flex vertical>
                    <Text strong>Sắp sếp theo</Text>
                    <Select
                      placeholder="Hoạt động gần đây nhất"
                      className={cx('select-tag')}
                      options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                      ]}
                    />
                  </Flex>
                  <Flex vertical>
                    <Text strong>Sắp sếp theo</Text>
                    <Select
                      placeholder="Hoạt động gần đây nhất"
                      className={cx('select-tag')}
                      options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                      ]}
                    />
                  </Flex>
                </Flex>
                <Flex vertical justify="center">
                  <Text strong>Tìm kiếm</Text>
                  <Input placeholder="Tìm kiếm" prefix={<IoSearchOutline size={15} />} />
                </Flex>
              </Flex>
              <Table title="Project Manangement"/>
              <Button type="text" className={cx('btn')}>Xem tất cả các bảng đã đóng</Button>
            </Flex>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Work;
