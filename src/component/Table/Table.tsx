import styles from './Table.module.scss';
import classNames from "classnames/bind";
import { FaRegStar } from "react-icons/fa";

const cx = classNames.bind(styles);

type TableProps = {
  title: string;
}

const Table = ({ title }: TableProps) => {
  return (
    <>
      <div className={cx("table-title")}>
        <div className={cx('table-title-details')}>
          <h4 className={cx("table-title-details-name")}>{title}</h4>
          <div className={cx("table-title-details-option")}>
            <span>
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
