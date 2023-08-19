import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  getOffers,
  getFavoriteOffers,
  getFullOffer,
  getReviews,
  getNearbyOffers,
  setOffersDataLoadingStatus,
  setFavoriteOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setReviewsDataLoadingStatus,
  setNearbyOffersDataLoadingStatus,
} from './action';
import { City } from '../const/cities';
import { OfferT, OfferFullT, ReviewT } from '../types/types';
import { FULL_OFFER_EXAMPLE } from '../const/full-offer-example';

type initialStateT = {
  city: typeof City[keyof typeof City];
  offers: OfferT[];
  favoriteOffers: OfferT[];
  fullOffer: OfferFullT;
  reviews: ReviewT[];
  nearbyOffers: OfferT[];
  isDataLoading: {
    offers: boolean;
    favoriteOffers: boolean;
    offer: boolean;
    reviews: boolean;
    nearbyOffers: boolean;
  };
};

const initialState: initialStateT = {
  city: Object.values(City)[0],
  offers: [],
  favoriteOffers: [],
  fullOffer: FULL_OFFER_EXAMPLE,
  reviews: [],
  nearbyOffers: [],
  isDataLoading: {
    offers: false,
    favoriteOffers: false,
    offer: false,
    reviews: false,
    nearbyOffers: false,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isDataLoading.offers = action.payload;
    })
    .addCase(setFavoriteOffersDataLoadingStatus, (state, action) => {
      state.isDataLoading.favoriteOffers = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isDataLoading.offer = action.payload;
    })
    .addCase(setReviewsDataLoadingStatus, (state, action) => {
      state.isDataLoading.reviews = action.payload;
    })
    .addCase(setNearbyOffersDataLoadingStatus, (state, action) => {
      state.isDataLoading.nearbyOffers = action.payload;
    });
});

export default reducer;
