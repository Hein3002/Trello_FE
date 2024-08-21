import avatar from "../../../assets/image/avatar.jpg"

const BoardBar = () => {
  return (
    <>
      <div className="position-fixed" style={{ top: '56px', right: 0, left: '256px', backgroundColor: '#062e65' }} >
        <div className="py-2 px-4">
          <div className="d-flex align-items-center">
            <div className="d-flex gap-4 align-items-center">
              <input type="text" style={{background: 'transparent'}} className="border-0 py-1 px-2 fw-semibold text-center" defaultValue="Hiển test cái này"/>
              <div className="btn btn-dark d-flex align-items-center justify-content-center" style={{ cursor: 'pointer', width: '10px', height: '25px' }}>
                <i className="bi bi-star fs-6"></i>
              </div>
              <div className="btn btn-dark d-flex align-items-center justify-content-center" style={{ cursor: 'pointer', width: '10px', height: '25px' }}>
                <i className="bi bi-people"></i>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-light btn-sm">Bảng</button>
                <button className="btn btn-sm btn-secondary"><i className="bi bi-chevron-down"></i></button>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-2" style={{ flex: 1 }}>
              <div className="d-flex align-items-center gap-3">
                <div className="btn btn-dark d-flex align-items-center justify-content-center" style={{ cursor: 'pointer', width: '10px', height: '25px' }}>
                  <i className="bi bi-star fs-6"></i>
                </div>
                <div className="btn btn-dark d-flex align-items-center justify-content-center" style={{ cursor: 'pointer', width: '10px', height: '25px' }}>
                  <i className="bi bi-star fs-6"></i>
                </div>
                <div className="d-flex">
                  <div className="btn d-flex align-items-center justify-content-center gap-2" style={{ cursor: 'pointer', width: 'fit-content', height: '30px' }}>
                    <i className="bi bi-star fs-6"></i>
                    <span>Bộ lọc</span>
                  </div>
                  <span className="border-end border-1 ms-1"></span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div style={{ cursor: "pointer"}}>
                  <img src={avatar} style={{ width: "33px", height: '33px' }} className="rounded-circle" />
                </div>
                <button className="btn btn-light btn-sm">Chia sẻ</button>
                <div className="btn btn-dark d-flex align-items-center justify-content-center" style={{ cursor: 'pointer', width: '10px', height: '25px' }}>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardBar
