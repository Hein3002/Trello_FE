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
import Register from "../page/Auth/Register/Register";
import ChatApp from "../component/Chat/Chat";
import Table from "../page/Board/BoardContent/Table/Table";
import { URL } from "../utils/url";
import Schedule from "../page/Board/BoardContent/Calender/Calender";



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
        path: "workspace/:id",
        element: <Work />
      },
      {
        path: URL.BOARD+":id",
        element: <BoardDetials />,
        children:[
          {
            path: "",
            element: <BoardContent/>,
            children: [
              {
                path:"message",
                element:<ChatApp/>
              }
            ]
          },
          {
            path: "calender",
            element: <Schedule/>
          },
          {
            path: "table",
            element: <Table/>
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
     },
     {
      path: "register",
      element: <Register/>
     }
    ]
  }
]);

export default route;