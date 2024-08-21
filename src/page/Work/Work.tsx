import Avatar from "../../assets/image/avatar.jpg"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from "../../component/Table/Table";


const Work = () => {
  return (
    <div className="mt-5 vh-100">
      <div className="row d-flex justify-content-center">
        <div className="d-flex align-items-center justify-content-start col-8 p-4" style={{ gap: "7rem" }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 d-flex align-items-center gap-3" >
              <img src={Avatar} className="rounded" style={{ width: "65px", height: "65px" }} />
              <div className="m-auto">
                <h5>Trello không gian làm việc</h5>
                <p className="m-0" style={{ fontSize: "12px" }}>Riêng tư</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <Button variant="primary" className="w-100 align-self-start">Mời các thành viên khác vào không gian làm việc</Button>
          </div>
        </div>
      </div>
      <hr style={{ width: "90%" }} className="mx-auto my-4" />
      <div className="row justify-content-center">
        <div className="col-11 p-0">
          <h5 className="fw-semibold">Bảng</h5>
          <div className="d-flex">
            <div className="w-75">
              <div className="d-flex w-50 gap-2">
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <Form>
                <Row className="justify-content-end">
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Tìm kiếm"
                      className=" mr-sm-2"
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
          <div>
            <Table/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
