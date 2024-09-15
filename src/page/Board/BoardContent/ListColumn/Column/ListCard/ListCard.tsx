import { Flex } from "antd";
import Card from "./Card/Card";
import classNames from 'classnames/bind';
import styles from '../../../BoardContent.module.scss';

const cx = classNames.bind(styles);


const ListCard = () => {
  return (
    <>
      <Flex vertical className={cx('list-card')} gap={10}>
        <Card/>
      </Flex>
    </>
  );
};

export default ListCard;
