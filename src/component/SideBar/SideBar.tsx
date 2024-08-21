import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CustomToggle from '../ButtonToggle/ButtonToggle'
import TrelloIcon from '../IconSvg/IconHomeLayout/trello_icon';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside style={{ width: '256px' , maxHeight: "90vh"}} className="float-start p-2">
      <div className='border-bottom mb-3'>
        <ul className='list-group border-0 gap-1 mb-3'>
          <li className="d-flex align-items-center gap-3 list-group-item list-group-item-action border-0 rounded">
            <TrelloIcon /> Bảng
          </li>
          <li className="d-flex align-items-center gap-3 list-group-item list-group-item-action border-0 rounded">
            <i className="fa-solid fa-envelope-open fa-lg me-3"></i> Mẫu
          </li>
          <li className="d-flex align-items-center gap-3 list-group-item list-group-item-action border-0 rounded">
            <i className="fa-solid fa-envelope-open fa-lg me-3"></i> Trang chủ
          </li>
        </ul>
      </div>
      <div>
        <p style={{ fontSize: "12px" }} className='fw-semibold'>Các không gian làm việc</p>
        <Accordion defaultActiveKey="0">
          <Card className='w-100 border-0'>
            <CustomToggle eventKey="0">Trello không gian làm việc</CustomToggle>
            <Accordion.Collapse eventKey="0">
              <ul className='list-group border-0 gap-1 mb-3'>
                <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
                  <Link to="" className='ps-4 text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon /> Bảng</Link>
                </li>
                <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
                  <Link to="" className='ps-4 text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon /> Điểm nổi bật</Link>
                </li>
                <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
                  <Link to="" className='ps-4 text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon /> Hình</Link>
                </li>
                <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
                  <Link to="" className='ps-4 text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon /> Thành viên</Link>
                </li>
                <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
                  <Link to="" className='ps-4 text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon /> Cài đặt</Link>
                </li>
              </ul>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </aside>
  )
}

export default SideBar
