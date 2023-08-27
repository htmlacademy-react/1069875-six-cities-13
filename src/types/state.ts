import {store} from '../store/index.js';
import { City } from '../const/cities';
import { AuthorizationStatus, OfferStatus } from '../const/server';
import { SortingType } from '../const/others';
import { OfferT, OfferFullT } from '../types/offer';
import { ReviewT } from '../types/review';
import { AuthUserT } from '../types/user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type StatusDataT = {
  id: string;
  status: typeof OfferStatus[keyof typeof OfferStatus];
};

export type UserDataT = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  userData: Omit<AuthUserT, 'token'> | null;
  loginError: boolean;
  loginDataSending: boolean;
};

export type MainDataT = {
  city: typeof City[keyof typeof City];
  offers: OfferT[];
  isDataLoading: boolean;
  activeSorting: typeof SortingType[keyof typeof SortingType];
  activeOffer: string | null;
};

export type OfferDataT = {
  fullOffer: OfferFullT;
  isFavorite: boolean;
  reviews: ReviewT[];
  nearbyOffers: OfferT[];
  offerError: boolean;
  isDataLoading: boolean;
};

export type FavoriteDataT = {
  favoriteOffers: OfferT[];
  isDataLoading: boolean;
};

export type ReviewFormT = {
  comment: string;
  rating: number;
  isReviewSending: boolean;
};
