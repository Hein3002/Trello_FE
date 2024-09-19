import { Column } from "./ColumnModel";

export interface Board {
  board_id: string;
  title: string,
  description: string,
  type: string,
  ownerIds: string[],
  memberIds: string[],
  columnOrderIds: string[],
  columns: Column[];
};