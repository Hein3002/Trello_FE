import classNames from 'classnames/bind';
import styles from '../BoardContent.module.scss';
import ListCard from './Column/ListCard/ListCard';
import { Column as ColumnModel } from '../../../../model/ColumnModel';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { Typography } from 'antd';
import { Button } from 'antd';
import { TbCopy } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";

const { Title } = Typography;

const cx = classNames.bind(styles);
interface Props {
  column: ColumnModel;
}

const Column: React.FC<Props> = ({ column }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({id: column.column_id, data: {...column}});
  
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    height: '100%',
  };
  return (
    <>
    <div  ref={setNodeRef}  {...attributes}  style={style}>
      <div className={cx('column')} {...listeners}>   
        <Title level={5}>{column?.title}</Title>          
        <ListCard cards={column?.cards}/>
        <div className={cx('column-action')}>
          <Button iconPosition='start' type='text' icon={<IoMdAdd />}>Thêm thẻ</Button>
          <Button type='text' icon={<TbCopy/>}/>
        </div>
      </div>
      </div>
    </>

  );
};

export default Column;
