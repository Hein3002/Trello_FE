import BoardBar from "./BoardBar/BoardBar";
import { Outlet } from "react-router-dom";


const BoardDetials = () => {
  return (
    <div>
      <BoardBar/>
      <Outlet/>
    </div>
  );
};

export default BoardDetials;
