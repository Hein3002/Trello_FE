import { getBoarByIddAPI, updateBoarDetailsdAPI } from "../../services/Board/board.sevice";
import BoardBar from "./BoardBar/BoardBar";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Board } from "../../model/BoardModel";
import { createColumndAPI, updateColumndAPI } from "../../services/Column/Column.service";
import { Column } from "../../model/ColumnModel";
import { Card } from "../../model/CardModel";
import { createCardAPI, getCardByIddAPI } from "../../services/Card/Card.service";
import CardDialog from "../../component/CardDialog/CardDialog";
import { generatePlaceholderCard } from "../../utils/format";
import { isEmpty } from "lodash";

const BoardDetials = () => {
  const { id } = useParams()
  const [board, setBoard] = useState<Board>()
  const [cardData, setCardData] = useState<Card>()
  const fetchBoardDetailsAPI = async () => {
    const response :Board = await getBoarByIddAPI(id);
    response?.column?.forEach(column => {
      if (isEmpty(column.card)) {
        column.card = [generatePlaceholderCard(column)]
        column.cardOrderIds = [generatePlaceholderCard(column).column_id]
      } 
    })
    setBoard(response)
  }
  //column
  const moveCard =  (
    overColumn: any,
    activeDraggingCardId: any,
    nextColumns: Column[],
    activeColumn: any,
  ) => {
    const moveCardData = {
      column_id: overColumn.column_id,
      card_id: activeDraggingCardId,
      card_id_order_old: nextColumns.find(column => column.column_id === activeColumn.column_id)?.card.map(c => c.card_id).toString(),
      card_id_order_new: nextColumns.find(column => column.column_id === overColumn.column_id)?.card.map(c => c.card_id).toString()
    }
    const newBoard = {...board}
    newBoard.column = nextColumns
    setBoard(newBoard as Board)
    updateColumndAPI(moveCardData)
  }
  //board
  const createNewColumn = async (columnData: Column) => {
    const response = await createColumndAPI({
      ...columnData,
      board_id: id
    })
    const newBoard = { ...board }
    if (!newBoard.column) {
      newBoard.column = []
    }
    response.card = [generatePlaceholderCard(response)]
    newBoard.column?.push(response)
    newBoard.columnOrderIds?.push(response.column_id)
    setBoard(newBoard as Board)
  }
  const moveColumn = (sortedColumn: Column[]) => {
    const sortedColumnIds = sortedColumn.map(c => c.column_id)
    const newBoard = { ...board }
    newBoard.column = sortedColumn
    newBoard.columnOrderIds = sortedColumnIds
    setBoard(newBoard as Board)
    const dataUpdate = {
      column_id_order: sortedColumnIds,
      board_id: board?.board_id
    }
    updateBoarDetailsdAPI(dataUpdate)
  }
  //card
  const createNewCard = async (cardData: Card) => {
    const response = await createCardAPI({
      ...cardData,
    })
    const newBoard = { ...board }
    const columnToUpdate = newBoard.column?.find(column => column.column_id === response.column_id)
    if (columnToUpdate) {
      if (!columnToUpdate?.card) {
        columnToUpdate.card = []
      }
      const { column_id, ...cardWithoutColumnId } = response;
      if (columnToUpdate.card.some(card => card.FE_PlaceholderCard)) {
        columnToUpdate.card = [cardWithoutColumnId]
        columnToUpdate.cardOrderIds = [cardWithoutColumnId]
      } else {
        columnToUpdate.card?.push(cardWithoutColumnId)
        columnToUpdate.cardOrderIds?.push(cardWithoutColumnId?.card_id)
      }
    }
    setBoard(newBoard as Board)
  }
  const fetchCardById = async (cardId: Card) => {
    const result = await getCardByIddAPI(cardId);
    setCardData(result)
  }

  // board.column = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  useEffect(() => {
    fetchBoardDetailsAPI()
  }, [id])
  // handel modal
  const [toggleModel, setToggleModal] = useState(false);

  const handleToggleModal = () => {
    setToggleModal(!toggleModel);
  };
  
console.log("Board", board)

  return (
    <>
      <CardDialog
        isModalOpen={toggleModel}
        cardData={cardData}
        handleToggleModal={handleToggleModal}
      />
      <BoardBar />
      <Row justify="center">
        <Col span={23} >
          <Outlet context={{
            board: board,
            createNewColumn: createNewColumn,
            createNewCard: createNewCard,
            moveColumn: moveColumn,
            handleToggleModal: handleToggleModal,
            fetchCardById: fetchCardById,
            moveCard: moveCard
          }} />
        </Col>
      </Row>
    </>
  );
};

export default BoardDetials;
