import { Button, Col, Modal, Row, Typography, Input, Divider, Avatar, List, Checkbox, Flex, Menu, Upload } from 'antd';
import styles from './CardDialog.module.scss';
import classNames from "classnames/bind";
import { useState } from 'react';
import DateModal from './DateModal/DateModal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
    ArrowRightOutlined,
    BookOutlined,
    CheckSquareOutlined,
    ClockCircleOutlined,
    ControlOutlined,
    CopyOutlined,
    EllipsisOutlined,
    LinkOutlined,
    PictureOutlined,
    PlusOutlined,
    ShareAltOutlined,
    UploadOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import CustomPop from './../PopConfirm/PopConfirm';

const cx = classNames.bind(styles);

const { Title, Text } = Typography;

const CardDialog = (props: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { cardData } = props
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const [description, setDescription] = useState(); // Nội dung mô tả

    const handleDescriptionChange = (value: any) => {
        setDescription(value); // Cập nhật giá trị khi người dùng chỉnh sửa
    };
    if (!cardData) {
        return
    }

    return (
        <>
            <Modal width={900} footer={null} open={props.isModalOpen} onCancel={props.handleToggleModal} title={
                <Row align="middle" justify="space-between">
                    <Col>
                        <Title level={4}>{cardData?.name}</Title>
                        <Text type="secondary">trong danh sách {cardData.column_name}</Text>
                    </Col>
                </Row>
            }>
                <Row gutter={[16, 16]}>
                    {/* Phần bên trái */}
                    <Col span={16}>
                        {/* Mô tả */}
                        <div>
                            <Title level={5}>Mô tả</Title>
                            <ReactQuill
                                theme="snow"
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="Thêm mô tả chi tiết hơn..."
                            />
                        </div>
                        <Divider />
                        <div className={cx("new-section")}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Title level={5} style={{ margin: '0' }}>Các chức năng cần làm trong đồ án 4</Title>
                                <Button>Xóa</Button>
                            </div>
                            <List
                                itemLayout="horizontal"
                                dataSource={[
                                    { label: 'Kéo thả các cột và các thẻ' },
                                    { label: 'Các chức năng của cột' },
                                    { label: 'Các chức năng của thẻ' },
                                ]}
                                renderItem={(item) => (
                                    <List.Item className={cx('listwork')}>
                                        <div>
                                            <Checkbox />
                                            <span style={{ marginLeft: '10px' }}>{item.label}</span>
                                        </div>
                                        <div className={cx('listwork-button')}>
                                            <Button icon={<ClockCircleOutlined />} onClick={handleOpenModal}></Button>
                                            <Button icon={<UserAddOutlined />}></Button>
                                            <Button icon={<EllipsisOutlined />}></Button>
                                        </div>
                                    </List.Item>
                                )}
                            />
                        </div>
                        <Divider />
                        {/* Hoạt động */}
                        <div>
                            <Title level={5}>Hoạt động</Title>
                            <Input placeholder="Viết bình luận..." prefix={<Avatar>HV</Avatar>} />
                            <List
                                itemLayout="horizontal"
                                dataSource={[1, 2, 3]}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar>{ }</Avatar>}
                                            title={
                                                <Text>
                                                    <strong>{"Name"}</strong>
                                                </Text>
                                            }
                                            description={"item.timestamp"}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>

                    {/* Phần bên phải */}
                    <Col span={8}>
                        <Button block icon={<UserAddOutlined />} className={cx("button")}>Rời đi</Button>
                        <CustomPop title={
                            <>
                                <Flex justify='center'>
                                    Thành viên
                                </Flex>
                            </>
                        } content={
                            <>
                                <Flex vertical gap="10px">
                                    <Input style={{ width: "100%" }} placeholder='Tìm kiếm thành viên trong nhóm' />
                                    <Menu
                                        style={{ width: 256 }}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode="inline"
                                        items={[
                                            {
                                                key: 'grp',
                                                label: <Text strong>Thành viên trong thẻ</Text>,
                                                type: 'group',
                                                children: [
                                                    {
                                                        key: '1',
                                                        label: 'Option 13'
                                                    },
                                                ],
                                            },
                                            {
                                                key: 'grp',
                                                label: <Text strong>Thành viên trong bảng</Text>,
                                                type: 'group',
                                                children: [
                                                    {
                                                        key: '2',
                                                        label: 'Option 13'
                                                    },
                                                ],
                                            },
                                        ]}
                                    />
                                </Flex>
                            </>
                        }>
                            <Button block icon={<UserOutlined />} className={cx("button")}>
                                Thành viên
                            </Button>
                        </CustomPop>
                        <CustomPop title={
                            <>
                                <Flex justify='center'>
                                    Việc cần làm
                                </Flex>
                            </>
                        } action={true} content={
                            <>
                                <Flex vertical gap="10px" style={{ marginTop: "10px" }}>
                                    <Text strong>Tiêu đề</Text>
                                    <Input style={{ width: "300px" }} placeholder='Việc cần làm' />
                                </Flex>
                            </>
                        }>
                            <Button block icon={<UserOutlined />} className={cx("button")}>
                                Việc cần làm
                            </Button>
                        </CustomPop>
                        <Button block icon={<ClockCircleOutlined />} className={cx("button")} onClick={handleOpenModal}>Ngày</Button>
                        <CustomPop title={
                            <>
                                <Flex justify='center'>
                                    Đính kèm
                                </Flex>
                            </>
                        } action={true} content={
                            <>
                                <Flex vertical gap="10px" style={{ marginTop: "10px" }}>
                                    <Text strong>Đính kèm từ máy tính của bạn</Text>
                                    <Upload
                                    // Ẩn danh sách file đã tải lên
                                    >
                                        <Button icon={<UploadOutlined />}>
                                            Chọn tệp
                                        </Button>
                                    </Upload>
                                </Flex>
                            </>
                        }>
                            <Button block icon={<UserOutlined />} className={cx("button")}>
                                Đính kèm
                            </Button>
                        </CustomPop>

                        <Button block icon={<ArrowRightOutlined />} className={cx("button")}>Di chuyển</Button>

                        <Button block icon={<BookOutlined />} className={cx("button")}>Xóa</Button>
                    </Col>
                </Row>
            </Modal>
            <DateModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default CardDialog;