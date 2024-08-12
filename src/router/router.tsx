import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Board from "../page/Board";


const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children : [
      {
        path:"list-board",
        element: <Board/>
      }
    ]
  }
])

export default route