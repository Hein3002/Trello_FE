import classNames from 'classnames/bind';
import styles from './BoardContent.module.scss';
import { DndContext } from "@dnd-kit/core";
import { DragEndEvent } from '@dnd-kit/core';
import ListColumn from "./ListColumn/ListColumn";

const cx = classNames.bind(styles);

const BoardContent = () => {
  return (
    <DndContext>
      <div className={cx('board-content')}>
        <ListColumn/>
      </div>
    </DndContext>
  );
};

export default BoardContent;
