import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers, getFavoriteOffers, getFullOffer, getReviews, getNearbyOffers } from './action';
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
};

const initialState: initialStateT = {
  city: Object.values(City)[0],
  offers: [],
  favoriteOffers: [],
  fullOffer: FULL_OFFER_EXAMPLE,
  reviews: [],
  nearbyOffers: [],
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
    });
});

export default reducer;
