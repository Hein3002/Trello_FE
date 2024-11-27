import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './BoardContent.module.scss';
import {
  closestCorners,
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation
} from "@dnd-kit/core";
import { arrayMove } from '@dnd-kit/sortable';
import { cloneDeep } from 'lodash';
import ListColumn from "./ListColumn/ListColumn";
import { Board } from '../../../model/BoardModel';
import { Column as ColumnModel } from '../../../model/ColumnModel';
import { Card as CardModel } from '../../../model/CardModel';
import Column from './ListColumn/Column';
import Card from './ListColumn/Column/ListCard/Card/Card';


const cx = classNames.bind(styles);
interface Props {
  board: Board;
}
type UniqueIdentifier = string | number;
const ACTIVE_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD"
};

const BoardContent: React.FC<Props> = ({ board }) => {
  const [sortedColumn, setSortedColumn] = useState<ColumnModel[]>([]);
  const [dragItemType, setDragItemType] = useState<string | null>(null);
  const [dragItemId, setDragItemId] = useState<ColumnModel["column_id"] | CardModel["card_id"] | null>(null);
  const [dragItemData, setDragItemData] = useState<ColumnModel | CardModel | null>(null);
  useEffect(() => {
    setSortedColumn(board.columns);
  }, [board]);
  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };
  const findColumnByCardId = (cardId: UniqueIdentifier) => {
    return sortedColumn.find(column => column.cards.map(card => card.card_id).includes(cardId as string));
  };

  const handleDragStart = (event: DragStartEvent) => {
    setDragItemId(event?.active?.id.toString());
    setDragItemType(event?.active?.data?.current?.column_id ? ACTIVE_ITEM_TYPE.COLUMN : ACTIVE_ITEM_TYPE.CARD);
    setDragItemData(event?.active?.data?.current as CardModel);
  };
  const handleDragOver = (event: DragOverEvent) => {
    if (dragItemType === ACTIVE_ITEM_TYPE.COLUMN) return;
    const { active, over } = event;
    if (!active || !over) return;
    const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active;
    const { id: overCardId } = over;
    const activeColumn = findColumnByCardId(activeDraggingCardId);
    const overColumn = findColumnByCardId(overCardId);
    if (!activeColumn || !overColumn) return;
    if (activeColumn.column_id !== overColumn.column_id) {
      setSortedColumn(prevColumns => {
        const overCardIndex = overColumn?.cards?.findIndex(card => card.card_id === overCardId);

        let newCardIndex: number;
        
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top >
          over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn.cards.length + 1;
        const nextColumn = cloneDeep(prevColumns) ;
        const nextActiveColumn = nextColumn.find(column => column.column_id === activeColumn.column_id)
        const nextOverColumn = nextColumn.find(column => column.column_id === overColumn.column_id)
        if(nextActiveColumn){
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card.card_id !== activeDraggingCardId)
        }
        if(nextOverColumn){
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card.card_id !== activeDraggingCardId)
          nextOverColumn.cards.splice(
            newCardIndex,
            0,
            {...activeDraggingCardData as CardModel, columnId: nextOverColumn.column_id}
          )
        }
        console.log(newCardIndex)
        return nextColumn;
      });
    };
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      setSortedColumn((sortedColumn) => {
        const oldIndex = sortedColumn.findIndex(column => column.column_id === active.id);
        const newIndex = sortedColumn.findIndex(column => column.column_id === over.id);
        return arrayMove(sortedColumn, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <div className={cx('board-content')}>
        <ListColumn columns={sortedColumn} />
      </div>
      <DragOverlay dropAnimation={dropAnimation}>
        {(!dragItemId || !dragItemType) && null}
        {(dragItemId && dragItemType === ACTIVE_ITEM_TYPE.COLUMN) && <Column column={dragItemData as ColumnModel} />}
        {(dragItemId && dragItemType === ACTIVE_ITEM_TYPE.CARD) && <Card card={dragItemData as CardModel} />}
      </DragOverlay>
    </DndContext>
  );
};

export default BoardContent;
