export interface Card {
  card_id: string,
  boardId: string,
  columnId: string,
  title: string,
  description: string|null,
  cover: string|null,
  memberIds: string[],
  comments: string[],
  attachments: string[]
};

export interface PlaceholderCard {
  card_id: string;
  boardId: string;
  columnId: string;
  FE_PlaceholderCard: boolean;
}