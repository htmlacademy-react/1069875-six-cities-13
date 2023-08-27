import { State } from '../../types/state';
import { NameSpace } from '../../const/server';

export const getComment = (state: State): string => state[NameSpace.ReviewForm].comment;

export const getRating = (state: State): number => state[NameSpace.ReviewForm].rating;

export const isReviewSending = (state: State): boolean => state[NameSpace.ReviewForm].isReviewSending;
