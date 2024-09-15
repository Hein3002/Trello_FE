import { Flex, Row, Col } from "antd";
import classNames from 'classnames/bind';
import styles from '../BoardContent.module.scss';
import Column from "./Column";

const cx = classNames.bind(styles);

const ListColumn = () => {
  return (
    <>
       <Row justify='center'>
        <Col span={24}>
          <Flex gap={20} className={cx('list-column')}>
            <Column/>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default ListColumn;
