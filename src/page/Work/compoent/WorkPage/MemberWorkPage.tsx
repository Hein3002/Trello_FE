import { Col, Row, Typography, Menu, MenuProps, Flex, Divider, List, Avatar } from "antd"
import { useEffect, useState } from "react";
import { getWorkSpaceMemberByIdUserAPI } from "../../../../services/WorkSpace/workSapce.service";


const { Title, Text } = Typography

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'grp',
    label: <>
      <Title level={3} style={{ margin: "8px" }}> Người cộng tác</Title>
    </>,
    type: 'group',
    children: [
      {
        key: '1',
        label: <Text strong >Thành viên trong không gian làm việc</Text>
      },
      {
        key: '2',
        label: <Text strong>Khách</Text>
      },
    ],
  },
];

const MemberWorkPage = () => {
  const [dataMember, setDataMember] = useState<any>([])
  const fetchGetMember = async() => {
    const response = await getWorkSpaceMemberByIdUserAPI()
    console.log(response)
  }
  useEffect(()=> {
    fetchGetMember()
  },[])
  return (
    <>
      <Row justify="center">
        <Col span={22}>
          <Row>
            <Flex style={{ width: "100%" }} gap="20px">
              <Col span={7}>
                <Menu
                  style={{ width: "100%" }}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  items={items}
                />
              </Col>
              <Col span={16}>
                <Title level={4}> Thành viên trong không gian làm việc</Title>
                <Divider></Divider>
                <List
                  dataSource={dataMember}
                  renderItem={(item:any) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Flex>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default MemberWorkPage
