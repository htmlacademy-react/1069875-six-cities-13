import { UserT } from './user';

export type ReviewT = {
  id: string;
  date: string;
  user: UserT;
  comment: string;
  rating: number;
};
