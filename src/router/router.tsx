import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Board from "../page/Board";
import Home from "../page/Home/Home";
import BoardLayout from "../layout/BoardLayout/BoardLayout";
import Work from "../page/Work/Work";
import BoardDetials from "../page/Board/_id";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Login from "../page/Auth/Login/Login";



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
        element: <BoardDetials />
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