import classNames from 'classnames/bind';
import styles from '../BoardContent.module.scss';
import ListCard from './Column/ListCard/ListCard';
import { Column as ColumnModel } from '../../../../model/ColumnModel';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Input, Typography } from 'antd';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { TbCopy } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

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
  } = useSortable({ id: column?.column_id, data: { ...column } });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    height: '100%',
  };
  const {createNewCard} = useOutletContext<{createNewCard:any}>()
  const [openNewCardform, setOpenNewCardForm] = useState(false)
  const [cardName, setCardName] = useState<string|"">("")
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
    toggleOpenNewCardForm()
  }
  return (
    <>
      <div ref={setNodeRef}  {...attributes} style={style}>
        <div className={cx('column')} {...listeners}>
          <Title level={5}>{column?.name}</Title>
          <ListCard cards={column?.card} />
          <div className={cx('column-action')}>
            {
              !openNewCardform
                ? <Button iconPosition='start' type='text' icon={<IoMdAdd />} onClick={toggleOpenNewCardForm}>Thêm thẻ</Button>
                : (<div className={cx("column-action-addcard")}>
                  <Input placeholder="Basic usage" variant="outlined" size="large" style={{ maxWidth: "200px" }} value={cardName} onChange={(e) => setCardName(e.target.value)}/>
                  <div style={{display: "flex ", gap: "10px"}}>
                    <Button type='primary'onClick={handleAddNewCard}>Add</Button>
                    <CloseOutlined onClick={toggleOpenNewCardForm}/>
                  </div>
                </div>)
            }

            <Button type='text' icon={<TbCopy />} />
          </div>
        </div>
      </div>
    </>

  );
};

export default Column;
