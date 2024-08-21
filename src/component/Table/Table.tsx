import { Link } from "react-router-dom"
import back_ground_table from "../../assets/image/back_ground_table.svg"

const Table = () => {
  return (
    <>
      <ul className="d-flex gap-3 flex-wrap p-0 my-4" style={{ listStyle: "none" }}>
        <li className="w-25 p-2 rounded" style={{ backgroundImage: `url(${back_ground_table})` }}>
          <Link to="" className="text-decoration-none fw-bold" style={{ display: 'block', height: "90px" }}>Bảng trello Của tôi</Link>
        </li>
        <li className="w-25 p-2 rounded" style={{ backgroundImage: `url(${back_ground_table})` }}>
          <Link to="" className="text-decoration-none fw-bold" style={{ display: 'block', height: "90px" }}>Bảng trello Của tôi</Link>
        </li>
        <li className="w-25 p-2 rounded" style={{ backgroundImage: `url(${back_ground_table})` }}>
          <Link to="" className="text-decoration-none fw-bold" style={{ display: 'block', height: "90px" }}>Bảng trello Của tôi</Link>
        </li>
        <li className="w-25 p-2 rounded" style={{ backgroundImage: `url(${back_ground_table})` }}>
          <Link to="" className="text-decoration-none fw-bold" style={{ display: 'block', height: "90px" }}>Bảng trello Của tôi</Link>
        </li>
      </ul>
    </>
  )
}

export default Table
