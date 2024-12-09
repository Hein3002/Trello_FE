import { getBoarByIddAPI, updateBoarDetailsdAPI } from "../../services/Board/board.sevice";
import BoardBar from "./BoardBar/BoardBar";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Board } from "../../model/BoardModel";
import { createColumndAPI } from "../../services/Column/Column.service";
import { Column } from "../../model/ColumnModel";
import { Card } from "../../model/CardModel";
import { createCardAPI } from "../../services/Card/Card.service";

const BoardDetials = () => {
  const { id } = useParams()
  const [board, setBoard] = useState<Board>()
  const fetchBoardDetailsAPI = async () => {
    const response = await getBoarByIddAPI(id);
    setBoard(response)
    console.log(response)
  }
  const createNewColumn = async (columnData:Column) => {
    const response = await createColumndAPI({
      ...columnData,
      board_id: id
    })
    const newBoard = { ...board }
    newBoard.column?.push(response.results)
    newBoard.columnOrderIds?.push(response.results.column_id)
    setBoard(newBoard as Board)
  }
  const createNewCard = async(cardData: Card)=> {
    const response =  await createCardAPI({
      ...cardData,
    })
    const newBoard = { ...board }
    const columnToUpdate = newBoard.column?.find(column => column.column_id === response.results.column_id)
    if(columnToUpdate){
      // if (columnToUpdate.card.some(card => card.FE_PlaceholderCard)) {
      //   columnToUpdate.card = [response]
      //   columnToUpdate.cardOrderIds = [response.card_id]
      // } else {        
        const { column_id, ...cardWithoutColumnId } = response.results;
        columnToUpdate.card?.push(cardWithoutColumnId)
        columnToUpdate.cardOrderIds?.push(cardWithoutColumnIds?.card_id)
      // }
    }
    setBoard(newBoard as Board)
  }
  const moveColumn =  (sortedColumn:Column[]) => {
    const sortedColumnIds = sortedColumn.map(c => c.column_id)
    const newBoard = {...board}
    newBoard.column = sortedColumn
    newBoard.columnOrderIds = sortedColumnIds
    setBoard(newBoard as Board)
    const dataUpdate = {
      column_id_order: sortedColumnIds,
      board_id: board?.board_id
    }
    updateBoarDetailsdAPI(dataUpdate)
  }


  // board.column = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  useEffect(() => {
    fetchBoardDetailsAPI()
  }, [id])
  return (
    <>
      <BoardBar />
      <Row justify="center">
        <Col span={23} >
          <Outlet context={{ 
            board: board, 
            createNewColumn: createNewColumn,
            createNewCard: createNewCard,
            moveColumn: moveColumn
            }} />
        </Col>
      </Row>
    </>
  );
};

export default BoardDetials;
