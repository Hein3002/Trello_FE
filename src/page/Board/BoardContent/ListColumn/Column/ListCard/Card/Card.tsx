import { Card as CardAntd } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from '../../../../BoardContent.module.scss';
import { Card as CardModel } from "../../../../../../../model/CardModel";

const cx = classNames.bind(styles);

interface Props {
  action?: boolean;
  card: CardModel;
}

const Card: React.FC<Props> = ({ action = false, card }) => {
  return (
    <>
      {
        <CardAntd
          className={cx('list-card-item')}
          bodyStyle={{ padding: '10px' }}
          cover={card?.cover ? 
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />: null
          
          }


          actions={action ? [
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ] : undefined}

        >
          {card?.title}
        </CardAntd >
      }
    </>
  );
};

export default Card;
