import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Board from "../page/Board";
import Home from "../page/Home/Home";
import BoardLayout from "../layout/BoardLayout/BoardLayout";
import Work from "../page/Work/Work";
import BoardDetials from "../page/Board/id";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Login from "../page/Auth/Login/Login";
import BoardContent from "../page/Board/BoardContent/BoardContent";
import { mockData } from "../api/mock-data";
import { Calendar } from "antd";



const route = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "list-board",
        element: <Board />
      },
    ]
  },
  {
    element: <BoardLayout />,
    children: [
      {
        path: "work",
        element: <Work />
      },
      {
        path: "my-board",
        element: <BoardDetials />,
        children:[
          {
            path: "",
            element: <BoardContent board={mockData.board}/>
          },
          {
            path: "calender",
            element: <Calendar/>
          }
        ]
      }
    ]
  },
  {
    element: <AuthLayout />,
    children: [
     {
      path: "login",
      element: <Login/>
     }
    ]
  }
]);

export default route;