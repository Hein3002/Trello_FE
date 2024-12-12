import classNames from 'classnames/bind';
import styles from '../BoardContent.module.scss';
import ListCard from './Column/ListCard/ListCard';
import { Column as ColumnModel } from '../../../../model/ColumnModel';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Flex, Input, InputRef } from 'antd';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { TbCopy } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { IoMdMore } from "react-icons/io";


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
  } = useSortable({ id: column?.column_id, data: { ...column } });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    height: '100%',
  };
  const { createNewCard } = useOutletContext<{ createNewCard: any }>()
  const [openNewCardform, setOpenNewCardForm] = useState(false)
  const [cardName, setCardName] = useState<string | "">("")
  const inputRef = useRef<InputRef>(null)
  const toggleOpenNewCardForm = () => {
    setOpenNewCardForm(!openNewCardform)
  }

  const handleAddNewCard = () => {
    const cardData = {
      name: cardName,
      column_id: column.column_id
    }
    createNewCard(cardData);
    setCardName("")
    inputRef.current?.focus()
  }
  return (
    <>
      <div ref={setNodeRef}  {...attributes} style={style}>
        <div className={cx('column')} {...listeners}>
          <Flex justify='space-between' align='center' style={{ marginBottom: "5px" }}>
            <Input value={column?.name} className={cx("column-title")} />
            <Button type='text' shape='circle'>
              <IoMdMore />
            </Button>
          </Flex>
          <ListCard cards={column?.card} />
          <div className={cx('column-action')}>
            {
              !openNewCardform
                ? (<>
                  <Button iconPosition='start' type='text' icon={<IoMdAdd />} onClick={toggleOpenNewCardForm}>Thêm thẻ</Button>
                  <Button type='text' icon={<TbCopy />} />
                </>)
                : (<Flex gap="10px" justify='center' align='center'>
                  <Input
                    ref={inputRef}
                    placeholder="Basic usage"
                    autoFocus variant="outlined"
                    size="large" style={{ width: "100%" }}
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                  <Button type='primary' onClick={handleAddNewCard}>Add</Button>
                  <CloseOutlined onClick={toggleOpenNewCardForm} />
                </Flex>)
            }


          </div>
        </div>
      </div>
    </>

  );
};

export default Column;
