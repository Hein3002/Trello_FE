import styles from './Home.module.scss';
import classNames from "classnames/bind";
import Table from "../../component/SymbolicTable/SymbolicTable";
import { Typography, Button, Flex } from 'antd';
import { FaRegClock } from "react-icons/fa6";

const { Title } = Typography;


const cx = classNames.bind(styles);

const Home = () => {
  return (
    <>
      <div className={cx('home-page')}>
        <div className={cx('home-content')}>
          <div className={cx('home-content-top')}>
            <Title level={5} className={cx('home-content-title')}>
              <FaRegClock />
              Đã xem gần đây
            </Title>
            <div className={cx('home-content-top-main')}>
              <Table title='Setting Up Project' />
            </div>
          </div>

          <div className={cx('home-content-middle')}>
            <Title level={4} className={cx('home-content-title')}>
              Các không gian làm việc
            </Title>
            <div className={cx('home-content-action')}>
              <Title level={5} className={cx('home-content-title')}>
                <FaRegClock />
                Trello không gian làm việc
              </Title>
              <Flex align='center' justify='end' gap={10}>
                <Button type='text' className={cx('btn')}>Bảng</Button>
                <Button type='text' className={cx('btn')}>Dạng xem</Button>
                <Button type='text' className={cx('btn')}>Thành viên</Button>
                <Button type='text' className={cx('btn')}>Cài đặt</Button>
              </Flex>
            </div>
            <div className={cx('home-content-middle-main')}>
              <Table path='my-board' title='Hiển Test cái này' />
            </div>
          </div>


          <div className={cx('home-content-bottom')}>
            <Title level={4} className={cx('home-content-title')}>
              Các không gian làm việc khách
            </Title>
            <Title level={5} className={cx('home-content-title')}>
              <FaRegClock />
              Tao là hiển
            </Title>
            <div className={cx('home-content-bottom-main')}>
              <Table title='Hiệp Hưng OK' />
            </div>
          </div>

          <Button type='text' className={cx('btn', 'btn-view-all')}>Xem tất cả bẳng đã đóng</Button>

        </div>
      </div>
    </>
  );
};

export default Home;