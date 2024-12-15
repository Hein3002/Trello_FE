import classNames from "classnames/bind";
import styles from "./Work.module.scss";
import { UserOutlined } from '@ant-design/icons';
import { CiLock } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Avatar, Typography, Button, Row, Col, Select, Flex, Input } from 'antd';
import Table from "../../component/SymbolicTable/SymbolicTable";
import { Outlet, useParams } from "react-router-dom";
import { getWorkSpacedByIdAPI } from "../../services/WorkSpace/workSapce.service";
import { useEffect, useState } from "react";
import ModalCreateBoard from "./compoent/Modal/ModalCreateBoard";
import { URL } from "../../utils/url";
import ModalCreateMember from "./compoent/Modal/ModalCreateMember";

const { Title, Text } = Typography;
const cx = classNames.bind(styles);


const Work = () => {
  const { id } = useParams()
  const [data, setData] = useState<any>()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

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
  return (
    <>
      <ModalCreateBoard isOpenModal={isModalOpen} handleCancel={handleCancel} id={id}/>
      <ModalCreateMember toggleModal={toggleModal} handleToggleModal={handleToggleModal} id={id}/>
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
              <Button type="primary" onClick={handleToggleModal}><IoPersonAddOutline />Mời các thành viên vào không gian làm việc</Button>
            </div>
          </Col>
        </Row>
        <hr />
        <Outlet context={{
          data:data,
          showModal:showModal
        }}
        />
      </div>
    </>
  );
};

export default Work;
