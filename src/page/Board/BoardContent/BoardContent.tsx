import { Flex, Avatar, Card, Row, Col } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './BoardContent.module.scss';
import { DndContext } from "@dnd-kit/core";
import { DragEndEvent } from '@dnd-kit/core';
import ListColumn from "./ListColumn/ListColumn";

const cx = classNames.bind(styles);
const { Meta } = Card;

const BoardContent = () => {
  return (
    <div className={cx('board-content')}>
      <Row justify='center'>
        <Col span={24}>
          <Flex gap={20} className={cx('list-column')}>
            <div className={cx('column')}>
              <Flex vertical className={cx('list-card')} gap={10}>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  Tao vẫn là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
                <Card
                  className={cx('list-card-item')}
                  bodyStyle={{ padding: '10px' }}
                >
                  Tao là hiển
                </Card>
              </Flex>
            </div>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default BoardContent;
