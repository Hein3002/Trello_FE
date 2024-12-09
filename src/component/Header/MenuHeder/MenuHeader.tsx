import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Button } from 'antd';
import styles from './MenuHeader.module.scss';
import { ReactNode } from 'react';

type MenuHeaderProps = {
  title?: string;
  items?: MenuProps['items'];
  Icon?:  ReactNode
};
const MenuHeader = ({ title, items, Icon }: MenuHeaderProps) => {
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']} overlayStyle={{maxHeight: "350px"}}>
        {
          Icon ? (
            <Button type='text' shape='circle'>
              {Icon}
            </Button>
          ) : (
            <Button type="text" className={styles.btn}>
              {title}
              <DownOutlined />
            </Button>
          )
        }
      </Dropdown>
    </>
  );
};

export default MenuHeader;
