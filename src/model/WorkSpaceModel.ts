import { Board } from "./BoardModel"

export interface WorkSpace {
  workspace_id: string|"",
  name?: string,
  description: string|null,
  logo?: File|null,
  status?: string
  board?:Board[]|[]
};