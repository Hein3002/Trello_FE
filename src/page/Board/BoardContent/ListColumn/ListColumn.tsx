import { Flex, Row, Col, Button, Input } from "antd";
import classNames from 'classnames/bind';
import styles from '../BoardContent.module.scss';
import Column from "./Column";
import { Column as ColumnModel } from "../../../../model/ColumnModel";
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const cx = classNames.bind(styles);
interface Props {
  columns: ColumnModel[];
}

const ListColumn: React.FC<Props> = ({ columns }) => {
  const [openNewColumnform, setOpenNewColumnFomr] = useState(false);
  const {createNewColumn} = useOutletContext<{createNewColumn:any}>()
  const [title, setTitle] = useState<string|"">("")
  const toggleOpenNewColumnForm = () => {
    setOpenNewColumnFomr(!openNewColumnform)
  }
  const handleAddNewColumn = ()=>{

    const newColumnData = {
      name: title,
      status: "public"
    }
    createNewColumn(newColumnData);
    setTitle("");
    toggleOpenNewColumnForm()
  }
  return (
    <>
      <SortableContext items={columns?.map(column => column?.column_id)} strategy={horizontalListSortingStrategy}>
        <Row justify='center' style={{ height: '100%' }}>
          <Col span={24} style={{ height: '100%' }}>
            <Flex gap={20} className={cx('list-column')}>
              {
                columns?.map(((column,index) => <Column key={index} column={column} />))
              }
              
              {openNewColumnform
                ? (<div className={cx("column-action-add")}>
                  <Input placeholder="Enter column name" variant="outlined" size="large" style={{ maxWidth: "200px" }}value={title} onChange={(e) => setTitle(e.target.value)}/>
                  <Button type='primary' onClick={handleAddNewColumn}>Add</Button>
                </div>)
                : <Button onClick={toggleOpenNewColumnForm}>Add Column</Button>
              }
            </Flex>
          </Col>
        </Row>
      </SortableContext>
    </>
  );
};

export default ListColumn;
