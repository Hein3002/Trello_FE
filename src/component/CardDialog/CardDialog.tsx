import { Button, Col, Modal, Row, Typography, Input, Divider, Avatar, List, Checkbox } from 'antd';
import styles from './CardDialog.module.scss';
import classNames from "classnames/bind";
import { useState } from 'react';
import DateModal from './DateModal/DateModal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS
import {
    ArrowRightOutlined,
    BookOutlined,
    CheckSquareOutlined,
    ClockCircleOutlined,
    ControlOutlined,
    CopyOutlined,
    EllipsisOutlined,
    EyeOutlined,
    LinkOutlined,
    PictureOutlined,
    PlusOutlined,
    ShareAltOutlined,
    TagOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons';

const cx = classNames.bind(styles);

const { Title, Text } = Typography;

const CardDialog = (props: any) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const [description, setDescription] = useState(); // Nội dung mô tả

    const handleDescriptionChange = (value: any) => {
        setDescription(value); // Cập nhật giá trị khi người dùng chỉnh sửa
    };

    return (
        <>
            <Modal width={900} footer={null} open={props.isModalOpen} onCancel={props.handleCancel} title={
                <Row align="middle" justify="space-between">
                    <Col>
                        <Title level={4}>Title of card 1</Title>
                        <Text type="secondary">trong danh sách {['To Do Column 01']}</Text>
                    </Col>
                    <Col>
                        <Button icon={<EyeOutlined />}>Theo dõi</Button>
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
                                <Title level={5} style={{margin: '0'}}>Các chức năng cần làm trong đồ án 4</Title>
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
                                                    <strong>{"Name"}</strong> {"item.content"}
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
                        <Button block icon={<UserAddOutlined />} className={cx("button")}>Tham gia</Button>
                        <Button block icon={<UserOutlined />} className={cx("button")}>Thành viên</Button>
                        <Button block icon={<TagOutlined />} className={cx("button")}>Nhãn</Button>
                        <Button block icon={<CheckSquareOutlined />} className={cx("button")}>Việc cần làm</Button>
                        <Button block icon={<ClockCircleOutlined />} className={cx("button")} onClick={handleOpenModal}>Ngày</Button>
                        <Button block icon={<LinkOutlined />} className={cx("button")}>Đính kèm</Button>
                        <Button block icon={<PictureOutlined />} className={cx("button")}>Ảnh bìa</Button>
                        <Divider />
                        <Text strong>Tiện ích bổ sung</Text>
                        <Button block icon={<PlusOutlined />} className={cx("button")}>Thêm Tiện ích bổ sung</Button>
                        <Divider />
                        <Text strong>Tự động hóa</Text>
                        <Button block icon={<PlusOutlined />} className={cx("button")}>Thêm nút</Button>
                        <Divider />
                        <Text strong>Thao tác</Text>
                        <Button block icon={<ArrowRightOutlined />} className={cx("button")}>Di chuyển</Button>
                        <Button block icon={<CopyOutlined />} className={cx("button")}>Sao chép</Button>
                        <Button block icon={<ControlOutlined />} className={cx("button")}>Tạo mẫu</Button>
                        <Button block icon={<BookOutlined />} className={cx("button")}>Lưu trữ</Button>
                        <Button block icon={<ShareAltOutlined />} className={cx("button")}>Chia sẻ</Button>
                    </Col>
                </Row>
            </Modal>
            <DateModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default CardDialog;