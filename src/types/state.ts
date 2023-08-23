import {store} from '../store/index.js';
import { City } from '../const/cities';
import { AuthorizationStatus } from '../const/server';
import { OfferT, OfferFullT } from '../types/offer';
import { ReviewT } from '../types/review';
import { AuthUserT } from '../types/user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserDataT = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  userData: Omit<AuthUserT, 'token'> | null;
};

export type MainDataT = {
  city: typeof City[keyof typeof City];
  offers: OfferT[];
  isDataLoading: boolean;
};

export type OfferDataT = {
  fullOffer: OfferFullT;
  reviews: ReviewT[];
  nearbyOffers: OfferT[];
  offerError: boolean;
  isDataLoading: boolean;
  reviewError: boolean;
  isReviewSending: boolean;
};

export type FavoriteDataT = {
  favoriteOffers: OfferT[];
  favoriteOffersCount: number;
  isFavoriteOffersActual: boolean;
  isDataLoading: boolean;
};
