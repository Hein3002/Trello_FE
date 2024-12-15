import { Button, Col, Modal, Row, Typography, Input, Divider, Avatar, List, Checkbox, Flex, Menu, Upload } from 'antd';
import styles from './CardDialog.module.scss';
import classNames from "classnames/bind";
import { useEffect, useState } from 'react';
import DateModal from './DateModal/DateModal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
    ArrowRightOutlined,
    BookOutlined,
    CheckSquareOutlined,
    ClockCircleOutlined,
    DeleteOutlined,
    EllipsisOutlined,
    UploadOutlined,
    UserAddOutlined,
    UserOutlined
} from '@ant-design/icons';
import CustomPop from './../PopConfirm/PopConfirm';
import { createCheckListAPI, createCheckListNameAPI, deleteCheckListAPI, deleteCheckListNameAPI } from '../../services/CheckList/CheckList.service';
import { isArray } from 'lodash';
import { createFileAPI } from '../../services/File/File.sevice';
import { updateUserJoinCardAPI, updateUserOutCardAPI } from '../../services/Card/Card.service';

const cx = classNames.bind(styles);

const { Title, Text } = Typography;

const CardDialog = (props: any) => {
    const { cardData } = props
    const userId = localStorage.getItem("user_id")
    const [data, setData] = useState<any>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkListName, setCheckListName] = useState<any>("")
    const [checkList, setCheckList] = useState<any>("")
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleUploadChange = async (info: any) => {
        // Lấy danh sách file từ event
        const formData = new FormData()
        const { fileList } = info;

        // Cập nhật state
        setUploadedFiles(fileList);

        // Log danh sách file nếu cần
        if (fileList && typeof fileList != "string") {
            formData.append("path", fileList)
            formData.append("card_id", data.card_id)
        }
        const responese = await createFileAPI(formData)
        console.log(responese)
    };

    const [description, setDescription] = useState(); // Nội dung mô tả

    const handleDescriptionChange = (value: any) => {
        setDescription(value); // Cập nhật giá trị khi người dùng chỉnh sửa
    };
    const handleCreateCheckListName = async () => {
        const response = await createCheckListNameAPI({
            name: checkListName,
            card_id: cardData.card_id
        })
        const newData = { ...data }
        response.checklist = []
        newData.checklistname.push(response)
        setCheckListName("")
        setData(newData)
    }
    const handleCreateCheckList = async (idCheckListName: any) => {
        const response = await createCheckListAPI({
            checklistname_id: idCheckListName,
            name: checkList
        })
        const newData = { ...data }
        newData.checklistname.find((ckl: any) => ckl.checklistname_id == idCheckListName)?.checklist?.push(response)
        setCheckList("")
        setData(newData)
    }
    const handleDeleteCheckListName = (id: string) => {
        const newData = { ...data }
        newData.checklistname = newData.checklistname.filter((c: any) => c.checklistname_id != id)
        setData(newData)
        deleteCheckListNameAPI(id)
    }
    const handleDeleteCheckList = (idCheckList: string, idCheckListName: string) => {
        const newData = { ...data }
        const checkListNameIndex = newData.checklistname.findIndex((c: any) => c.checklistname_id == idCheckListName)
        newData.checklistname[checkListNameIndex].checklist = newData.checklistname[checkListNameIndex].checklist.filter((i: any) => i.checklist_id != idCheckList)
        setData(newData)

        deleteCheckListAPI(idCheckList)
    }

    const handleUseJoinCard = async () => {
        const respone = await updateUserJoinCardAPI(data.card_id)
        const newData = { ...data }
        if (!newData.userjoin) {
            newData.userjoin = []
        }
        newData.userjoin.push(respone)
        setData(newData)
    }
    const handleUseOutCard = async () => {
        const respone = await updateUserOutCardAPI(data.card_id)
        const newData = { ...data }
        newData.userjoin = newData.userjoin.filter((user: any) => user.user_id != respone.user_id)
        setData(newData)
    }

    useEffect(() => {
        if (cardData) {
            setData(cardData)
        }
    }, [cardData?.card_id])
    console.log(data.userjoin?.find((u: any) => u.user_id == userId))
    if (!cardData) {
        return
    }
    return (
        <>
            <Modal width={900} footer={null} open={props.isModalOpen} onCancel={props.handleToggleModal} title={
                <Row align="middle" justify="space-between">
                    <Col>
                        <Flex vertical justify='center' gap="10px">
                            <Title level={4}>{data?.name}</Title>
                            <Text type="secondary">Trong danh sách {data.column_id}</Text>
                            {
                                data?.userjoin?.map((item: any) => (
                                    <>
                                        <Avatar><UserOutlined /></Avatar>
                                    </>
                                ))
                            }
                        </Flex>
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
                        {
                            data.checklistname?.length > 0 && (
                                <>
                                    {
                                        data.checklistname?.map((item: any) => (
                                            <>
                                                <Divider />
                                                <div key={item.checklistname_id} className={cx("new-section")}>

                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "20px" }}>
                                                        <Title level={5} style={{ margin: '0' }}>{item.name}</Title>
                                                        <Button onClick={() => handleDeleteCheckListName(item.checklistname_id)}>Xóa</Button>
                                                    </div>
                                                    {
                                                        item.checklist?.length > 0 && (
                                                            <List
                                                                itemLayout="horizontal"
                                                                dataSource={item.checklist}
                                                                renderItem={(i: any) => (
                                                                    <List.Item className={cx('listwork')}>
                                                                        <div>
                                                                            <Checkbox />
                                                                            <span style={{ marginLeft: '10px' }}>{i.name}</span>
                                                                        </div>
                                                                        <div className={cx('listwork-button')}>
                                                                            <Button icon={<ClockCircleOutlined />} onClick={handleOpenModal}></Button>
                                                                            <Button icon={<UserAddOutlined />}></Button>
                                                                            <Button icon={<DeleteOutlined />} onClick={() => handleDeleteCheckList(i.checklist_id, item.checklistname_id)}></Button>
                                                                        </div>
                                                                    </List.Item>
                                                                )}
                                                            />

                                                        )
                                                    }
                                                    <Flex vertical gap="10px" style={{ marginTop: "10px" }}>
                                                        <Input placeholder='Thêm một mục' value={checkList} onChange={(e) => setCheckList(e.target.value)} />
                                                        <Button style={{ width: "fit-content" }} type='primary' onClick={() => handleCreateCheckList(item?.checklistname_id)}>Thêm một mục</Button>
                                                    </Flex>
                                                </div>
                                                <Divider />
                                            </>
                                        ))
                                    }

                                </>
                            )
                        }

                        {/* Hoạt động */}
                        <div>
                            <Title level={5}>Hoạt động</Title>
                            <Input placeholder="Viết bình luận..." prefix={<Avatar><UserOutlined /></Avatar>} />
                            {
                                data.comment?.length > 0 && (
                                    <>
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={data.comment}
                                            renderItem={(item: any) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar>{ }</Avatar>}
                                                        title={
                                                            <Text>
                                                                <strong>{"Name"}</strong>
                                                            </Text>
                                                        }
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </>
                                )
                            }

                        </div>
                    </Col>

                    {/* Phần bên phải */}
                    <Col span={8}>
                        {
                            data.userjoin?.find((u: any) => u.user_id == userId) ? (
                                <Button block icon={<UserAddOutlined />} onClick={handleUseOutCard} className={cx("button")}>Rời đi</Button>
                            ) : (
                                <Button block icon={<UserAddOutlined />} onClick={handleUseJoinCard} className={cx("button")}>Tham gia</Button>
                            )
                        }

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
                                                children: data?.userjoin?.map((item: any, index: any) => ({
                                                    key: `userjoin-${index}`,
                                                    label: item.name,
                                                })),
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
                                    <Input style={{ width: "300px" }} value={checkListName} onChange={(e) => setCheckListName(e.target.value)} placeholder='Việc cần làm' />
                                </Flex>
                            </>
                        } handleFunction={handleCreateCheckListName}>
                            <Button block icon={<CheckSquareOutlined />} className={cx("button")}>
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
                                        onChange={handleUploadChange}
                                        multiple
                                        beforeUpload={() => false}
                                    >
                                        <Button icon={<UploadOutlined />}>
                                            Chọn tệp
                                        </Button>
                                    </Upload>
                                </Flex>
                            </>
                        } >
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