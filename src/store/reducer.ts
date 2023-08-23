import { createReducer } from '@reduxjs/toolkit';
import {
  setCity,
  setAuthorizationStatus,
  setUserData,
  getOffers,
  getFavoriteOffers,
  setFavoriteOffersCount,
  setFavoriteOffersStatus,
  getFullOffer,
  getReviews,
  getNearbyOffers,
  setOfferErrorStatus,
  addReview,
  setReviewDataSendingStatus,
  setOffersDataLoadingStatus,
  setFavoriteOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
} from './action';
import { City } from '../const/cities';
import { AuthorizationStatus } from '../const/server';
import { OfferT, OfferFullT } from '../types/offer';
import { ReviewT } from '../types/review';
import { AuthUserT } from '../types/user';
import { FULL_OFFER_EXAMPLE } from '../const/full-offer-example';

type initialStateT = {
  city: typeof City[keyof typeof City];
  offers: OfferT[];
  favoriteOffers: OfferT[];
  favoriteOffersCount: number;
  isFavoriteOffersActual: boolean;
  fullOffer: OfferFullT;
  reviews: ReviewT[];
  nearbyOffers: OfferT[];
  offerError: boolean;
  isDataLoading: {
    offers: boolean;
    favoriteOffers: boolean;
    offer: boolean;
  };
  isReviewSending: boolean;
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  userData: Omit<AuthUserT, 'token'> | null;
};

const initialState: initialStateT = {
  city: Object.values(City)[0],
  offers: [],
  favoriteOffers: [],
  favoriteOffersCount: 0,
  isFavoriteOffersActual: false,
  fullOffer: FULL_OFFER_EXAMPLE,
  reviews: [],
  nearbyOffers: [],
  offerError: false,
  isDataLoading: {
    offers: false,
    favoriteOffers: false,
    offer: false,
  },
  isReviewSending: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setFavoriteOffersCount, (state, action) => {
      state.favoriteOffersCount = action.payload;
    })
    .addCase(setFavoriteOffersStatus, (state, action) => {
      state.isFavoriteOffersActual = action.payload;
    })
    .addCase(getFullOffer, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(getNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setOfferErrorStatus, (state, action) => {
      state.offerError = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(setReviewDataSendingStatus, (state, action) => {
      state.isReviewSending = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isDataLoading.offers = action.payload;
    })
    .addCase(setFavoriteOffersDataLoadingStatus, (state, action) => {
      state.isDataLoading.favoriteOffers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isDataLoading.offer = action.payload;
    });
});

export default reducer;
