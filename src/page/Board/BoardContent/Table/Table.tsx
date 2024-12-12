import style from "./Table.module.scss"
import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react';
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Col, List, Row, Typography } from "antd";
import ListItem from "./ListItem/ListItem";
import { useOutletContext } from "react-router-dom";
import { Board } from "../../../../model/BoardModel";
import { Column } from "../../../../model/ColumnModel";

const cx = classNames.bind(style)


const {Text} = Typography

const App: React.FC = () => {

  const { board } = useOutletContext<{board:Board}>()
  const [hozionColumn, setoHzionColumn] = useState<Column[]>([])

  useEffect(()=> {
    if(board?.column) {
      setoHzionColumn(board?.column)
    }
  },[board])
  
  return (
    <>
      <Row>
        <Col span={6}>
          <Text strong>Thẻ</Text>
        </Col>
        <Col span={6}>
          <Text strong>Danh sách</Text>
        </Col>
        <Col span={4}>
          <Text strong>Nhãn</Text>
        </Col>
        <Col span={4}>
          <Text strong>Thành viên</Text>
        </Col>
        <Col span={4}>
          <Text strong>Ngày hết hạn</Text>
        </Col>
      </Row>
          <List
            itemLayout="horizontal"
            dataSource={hozionColumn}
            renderItem={(item, index) => (
              <ListItem item={item} />
            )}
          />
    </>
  )
};

export default App;
