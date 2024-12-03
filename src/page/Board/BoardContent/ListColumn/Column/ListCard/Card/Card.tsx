import { Card as CardAntd } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from '../../../../BoardContent.module.scss';
import { Card as CardModel } from "../../../../../../../model/CardModel";
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const cx = classNames.bind(styles);

interface Props {
  action?: boolean;
  card: CardModel;
}

const Card: React.FC<Props> = ({ action = false, card }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({id: card.card_id, data: {...card}});
  
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '3px solid #81ecec' : undefined
  };
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
          cover={card?.cover ? 
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />: null          
          }
          onClick={()=>alert("hien")}
          actions={action ? [
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ] : undefined}
          
        >
          {card?.title}
        </CardAntd >
    </>
  );
};

export default Card;
