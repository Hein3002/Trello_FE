export interface Card {
  card_id: string,
  column_id: string,
  name: string,
  description: string|null,
  background: string|null,
  user_id_join: string[],
  comments: string[],
  attachments: string[]
  status: string,
  FE_PlaceholderCard: boolean
};
