import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListCard from './Column/ListCard/ListCard'
const Column = () => {
  return (
    <>
      <div style={{ width: 'fit-content' }} className="rounded-3 bg-dark p-2 d-flex flex-column gap-3">
        <div>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col xs="auto">
              <input type="text" className='border-0' style={{ background: 'transparent' }} defaultValue="Hiển đag làm cái này" />
            </Col>
            <Col xs="auto">
              <button className='btn btn-dark btn-sm'><i className="bi bi-three-dots"></i></button>
            </Col>
          </Row>
        </div>
       <ListCard/>
        <div className='d-flex align-items-center gap-2'>
          <button className='btn btn-dark btn-sm text-start' style={{ flex: 6 }}> <i className="bi bi-plus-lg me-1"></i>Thêm thẻ</button>
          <button className='btn btn-dark btn-sm' style={{ flex: 1 }}><i className="bi bi-copy"></i></button>
        </div>
      </div>
    </>

  )
}

export default Column
