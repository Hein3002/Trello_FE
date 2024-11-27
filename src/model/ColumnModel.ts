import { Card } from "./CardModel";

export interface Column {
  column_id: string|"",
  boardId: string|"",
  title: string|"",
  cardOrderIds: string[]|[],
  cards : (Card)[]|[];
};