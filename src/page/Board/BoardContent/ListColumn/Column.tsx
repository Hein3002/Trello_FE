import classNames from 'classnames/bind';
import styles from '../BoardContent.module.scss';
import ListCard from './Column/ListCard/ListCard';

const cx = classNames.bind(styles);

const Column = () => {
  return (
    <>
      <div className={cx('column')}>
        <ListCard/>
      </div>
    </>

  );
};

export default Column;
