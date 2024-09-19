import classNames from 'classnames/bind';
import styles from '../BoardContent.module.scss';
import ListCard from './Column/ListCard/ListCard';
import { Column as ColumnModel } from '../../../../model/ColumnModel';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

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
  } = useSortable({id: column.column_id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <>
      <div className={cx('column')} ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <ListCard cards={column?.cards}/>
      </div>
    </>

  );
};

export default Column;
