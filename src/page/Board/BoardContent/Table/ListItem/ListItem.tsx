import { Col, List, Row, Select, Typography } from 'antd'
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from 'react';

dayjs.extend(customParseFormat);

const dateFormat = 'YYYY-MM-DD';


const { Text } = Typography
const ListItem = (props: any) => {

  const [columnData, setColumnData] = useState<any>({})
  const onChange = (value: string, field:string, id:any) => {
    setColumnData((preve:any)=> ({
      ...preve,
      [id]:{
        [field]:value
      }
    }))
  };
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  return (
    <>
      <List.Item>
        <Row style={{ width: "100%" }}>
          <Col span={6}>
            <Text strong>{props.item.name}</Text>
          </Col>
          <Col span={6}>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="label"
              onChange={(value)=> onChange(value,"column_name", props?.item?.column_id)}
              onSearch={onSearch}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </Col>
          <Col span={4}>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="label"
              onChange={(value)=> onChange(value,"column_label", props?.item?.column_id)}
              onSearch={onSearch}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </Col>
          <Col span={4}>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="label"
              onChange={(value)=> onChange(value,"column_member", props?.item?.column_id)}
              onSearch={onSearch}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </Col>
          <Col span={4}>
            <DatePicker
              defaultValue={dayjs(`2024-01-01`, dateFormat)}
              minDate={dayjs('2024-01-01', dateFormat)}
              maxDate={dayjs('2030-10-31', dateFormat)}
            />
          </Col>
        </Row>
      </List.Item>
    </>
  )
}

export default ListItem
