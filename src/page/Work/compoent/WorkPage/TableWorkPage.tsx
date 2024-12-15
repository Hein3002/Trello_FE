import classNames from "classnames/bind";
import styles from "../../Work.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import {  Button, Row, Col, Select, Flex, Input, Typography } from 'antd';
import { useOutletContext } from "react-router-dom";
import { URL } from "../../../../utils/url";
import SymbolicTable from "../../../../component/SymbolicTable/SymbolicTable";


const { Title, Text } = Typography;
const cx = classNames.bind(styles);
const TableWorkPage = () => {
  const {data, showModal} = useOutletContext<{data:any, showModal:any}>()
  return (
    <div>
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
                  ? data.board.map((item: any, index: any) => (
                    <SymbolicTable path={URL.BOARD+ item.board_id} key={index} title={item.name} />
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
  )
}

export default TableWorkPage
