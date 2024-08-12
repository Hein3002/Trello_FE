import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Board from "../page/Board";
import BoardDetials from "../page/Board/_id";



const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children : [
      {
        path:"list-board",
        element: <Board/>
      },
      {
        path:"id",
        element: <BoardDetials/>        
      }
    ]
  }
])

export default route