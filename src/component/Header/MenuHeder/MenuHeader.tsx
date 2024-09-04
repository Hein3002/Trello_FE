import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Button } from 'antd';
import styles from './MenuHeader.module.scss';

type MenuHeaderProps = {
  title: string;
  items: MenuProps['items'];
};
const MenuHeader = ({title, items }:MenuHeaderProps) => {
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']}>
        <Button type="text" className={styles.btn}>
          {title}
          <DownOutlined/>
        </Button>
      </Dropdown>
    </>
  );
};

export default MenuHeader;
