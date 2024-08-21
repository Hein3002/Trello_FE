import TrelloIcon from '../IconSvg/IconHomeLayout/trello_icon';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


const SideBarWork = () => {
  return (
    <aside style={{ width: '260px', height: "100%" }} className="position-fixed float-start p-2 bg-dark mt-5 z-2">
      <div className='border-bottom  px-2 mb-3'>
        <div className='d-flex align-items-center gap-2'>
          <div className='d-flex align-items-center justify-content-center fw-bold fs-4 mb-3 rounded' style={{ background: "linear-gradient(#9F8FEF,#403294,#579DFF,#0747a6)", width: "32px", height: "32px", color: "#1D2125" }}>
            T
          </div>
          <div>
            <p className='fs-6 fw-semibold m-0'>Trello không gian làm việc</p>
            <p style={{ fontSize: "12px" }} className='text-secondary-emphasis'>Miễn phí</p>
          </div>
        </div>
      </div>
      <div>
        <ul className='list-group border-0 gap-1 mb-3'>
          <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
            <Link to="" className='text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon /> Bảng</Link>
          </li>
          <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
            <Link to="" className='text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon />Thành viên</Link>
          </li>
          <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
            <NavDropdown title="Các không gian làm việc" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/work">Các cài đặt không gian làm việc</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <p style={{ fontSize: "15px" }} className='fw-semibold m-0 p-3'>Dạng xem không gian làm việc</p>
          <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
            <Link to="" className='text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon /> Bảng</Link>
          </li>
          <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
            <Link to="" className='text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon />Lịch</Link>
          </li>
          <p style={{ fontSize: "15px" }} className='fw-semibold m-0 p-3'>Các bảng trello của tôi</p>
          <li className="d-flex align-items-center list-group-item border-0 rounded list-group-item-action ">
            <Link to="/my-board" className='text-decoration-none w-100 d-flex align-items-center gap-3'><TrelloIcon />Bảng trello của tôi</Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideBarWork
