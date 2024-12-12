import { Card as CardAntd } from "antd";
import { CommentOutlined, EyeOutlined, FileTextOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from '../../../../BoardContent.module.scss';
import { Card as CardModel } from "../../../../../../../model/CardModel";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const cx = classNames.bind(styles);

interface Props {
  action?: boolean;
  card: CardModel;
}

const Card: React.FC<Props> = ({ action = false, card}) => {
  const {handleToggleModal, fetchCardById} = useOutletContext<{handleToggleModal:any, fetchCardById:any}>()
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: card.card_id, data: { ...card } });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '3px solid #81ecec' : undefined,
    width: "100%",
    visibility: card?.FE_PlaceholderCard ? "hidden" : "visibility",
    // display: card?.FE_PlaceholderCard ? "none" : "block",
  };
  
  const handleOpenModal = (cardId:any) => {
    handleToggleModal()
    fetchCardById(cardId)
  }
   useEffect(()=> {
   },[card])


  return (
    <>
   
      <CardAntd
        ref={setNodeRef} style={style} {...attributes} {...listeners}
        className={cx('list-card-item')}        

        styles={{
          body: {
            padding: '10px'
          }
        }}
        cover={card?.background ?
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          /> : null
        }
        onClick={ ()=>handleOpenModal(card.card_id)}

      >
        {card?.name}

        {
          action ? (
            <div className={cx('flex', 'card-action')}>
              <EyeOutlined />
              <div className={cx("card-action-deadline")}>
                4th12
              </div>
              <CommentOutlined />
              <FileTextOutlined />
            </div>
          ) : <></>
        }

      </CardAntd >

    </>
  );
};

export default Card;
