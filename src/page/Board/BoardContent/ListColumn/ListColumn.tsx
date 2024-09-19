import { Flex, Row, Col } from "antd";
import classNames from 'classnames/bind';
import styles from '../BoardContent.module.scss';
import Column from "./Column";
import { Column as ColumnModel } from "../../../../model/ColumnModel";
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';

const cx = classNames.bind(styles);
interface Props {
  columns : ColumnModel[];
}

const ListColumn: React.FC<Props> = ({columns}) => {
  return (
    <>
    <SortableContext items={columns.map(column => column.column_id)} strategy={horizontalListSortingStrategy}>
        <Row justify='center'>
          <Col span={24}>
            <Flex gap={20} className={cx('list-column')}>
              {
                columns.map((column => <Column key={column.column_id} column = {column}/>))
              }
            </Flex>
          </Col>
        </Row>
        </SortableContext>
    </>
  );
};

export default ListColumn;
