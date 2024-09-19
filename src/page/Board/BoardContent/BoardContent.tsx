import classNames from 'classnames/bind';
import styles from './BoardContent.module.scss';
import { DndContext } from "@dnd-kit/core";
import ListColumn from "./ListColumn/ListColumn";
import { Board } from '../../../model/BoardModel';


const cx = classNames.bind(styles);
interface Props {
  board: Board;
}


const BoardContent: React.FC<Props> = ({board}) => {
  return (
    <DndContext>
      <div className={cx('board-content')}>
        <ListColumn columns = {board.columns}/>
      </div>
    </DndContext>
  );
};

export default BoardContent;
