import { UserT } from './user';

export type ReviewDataT = {
  comment: string;
  rating: number;
};

export type ReviewT = ReviewDataT & {
  id: string;
  date: string;
  user: UserT;
};
