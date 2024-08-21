import ClockIcon from "../../component/IconSvg/IconHomeLayout/clock_icon"
import Table from "../../component/Table/Table"

const Home = () => {
  return (
    <>
      <div className="p-2 ms-3">
        <div className="mb-5">
          <div className="d-flex gap-2 align-items-center">
            <ClockIcon />
            <h6 className="fw-bolder m-0">Đã xem gần đây</h6>
          </div>
          <div>
            <Table/>
          </div>
        </div>
        <div>
          <h6 className="fw-bold">CÁC KHÔNG GIAN LÀM VIỆC CỦA BẠN</h6>
          <div>
            <div className="d-flex align-items-center gap-4 mb-4">
              <h6 className="m-0">Trello không gian làm việc của bạn</h6>
              <div className="d-flex gap-4">
                <button type="button" className="btn btn-secondary btn-sm fw-semibold" style={{ color: '#eee' }}>Bảng</button>
                <button type="button" className="btn btn-secondary btn-sm fw-semibold" style={{ color: '#eee' }}>Dạng xem</button>
                <button type="button" className="btn btn-secondary btn-sm fw-semibold" style={{ color: '#eee' }}>Thành viên</button>
                <button type="button" className="btn btn-secondary btn-sm fw-semibold" style={{ color: '#eee' }}>Cài đặt</button>
              </div>
            </div>
            <Table/>
            <div>
              <button type="button" className="btn btn-secondary btn-sm fw-semibold" style={{ color: '#eee' }}>Xem tất cả các bảng đã đóng</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home