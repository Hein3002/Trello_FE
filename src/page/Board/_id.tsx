import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "../Board/BoardContent/BoardContent";
import {mockData} from "../../api/mock-data";


const BoardDetials = () => {
  return (
    <div>
      <BoardBar/>
      <BoardContent board={mockData.board}/>
    </div>
  );
};

export default BoardDetials;
