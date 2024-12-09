import classNames from "classnames/bind";
import styles from "./Work.module.scss";
import { UserOutlined } from '@ant-design/icons';
import { CiLock } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Avatar, Typography, Button, Row, Col, Select, Flex, Input } from 'antd';
import Table from "../../component/SymbolicTable/SymbolicTable";
import { useParams } from "react-router-dom";
import { getWorkSpacedByIdAPI } from "../../services/WorkSpace/workSapce.service";
import { useEffect, useState } from "react";
import { WorkSpace } from "../../model/WorkSpaceModel";
import ModalCreateColumn from "./compoent/Modal/ModalCreateColumn";
import { URL } from "../../utils/url";

const { Title, Text } = Typography;
const cx = classNames.bind(styles);


const Work = () => {
  const { id } = useParams()
  const [data, setData] = useState<WorkSpace>()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchWorkSapceDetails = async () => {
    const reponse = await getWorkSpacedByIdAPI(id)
    setData(reponse)
  }
  useEffect(() => {
    fetchWorkSapceDetails()
  }, [])
  console.log()
  return (
    <>
      <ModalCreateColumn isOpenModal={isModalOpen} handleCancel={handleCancel} fetchWorkSapceDetails={fetchWorkSapceDetails} />
      <div className={cx('work-page')}>
        <Row justify='center'>
          <Col span={16}>
            <div className={cx('work-page-top')}>
              <div className={cx('user')}>
                <Avatar shape="square" size={64} icon={<UserOutlined />} className={cx('user-icon')} />
                <div className={cx('user-profile')}>
                  <Title editable level={4}>{data?.name}</Title>
                  <Text strong> <CiLock />{data?.status}</Text>
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
              <Flex align="center" gap="10px" wrap>
                {
                  data?.board && data.board.length > 0
                    ? data.board.map((item, index) => (
                      <Table path={URL.BOARD+item.board_id} key={index} title={item.name} />
                    ))
                    : []
                }
                <Button style={{ width: "23.5%", padding: "50px" }} onClick={showModal}>Tạo bảng</Button>
              </Flex>
              <Button type="text" className={cx('btn')}>Xem tất cả các bảng đã đóng</Button>
            </Flex>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Work;
