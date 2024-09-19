import { Flex } from "antd";
import Card from "./Card/Card";
import classNames from 'classnames/bind';
import styles from '../../../BoardContent.module.scss';
import { Card as CardModel } from "../../../../../../model/CardModel";

const cx = classNames.bind(styles);
interface Props {
  cards: CardModel[];
}


const ListCard: React.FC<Props> = ({ cards }) => {
  return (
    <>
      <Flex vertical className={cx('list-card')} gap={10}>
        {
          cards?.map(card => <Card key={card.card_id} card={card} />)
        }
      </Flex>
    </>
  );
};

export default ListCard;
