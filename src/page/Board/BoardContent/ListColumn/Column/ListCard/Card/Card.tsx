import { Card as CardAntd } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from '../../../../BoardContent.module.scss';

const cx = classNames.bind(styles);

interface Props {
  cover?: boolean;
  action?: boolean
}

const Card: React.FC<Props> = ({ cover = false, action = false }) => {
  return (
    <>
      <CardAntd
        className={cx('list-card-item')}
        bodyStyle={{ padding: '10px' }}
        cover={cover ??
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }


        actions= {action ? [
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ] : undefined}

      >
        Tao vẫn là hiển
      </CardAntd >
    </>
  );
};

export default Card;
