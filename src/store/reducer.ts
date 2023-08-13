import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getCityOffers, getFavoriteOffers, getFullOffer, getReviews, getNearbyOffers } from './action';
import { City } from '../const/cities';
import { offers, fullOffer } from '../mocks/offers';
import { OfferT, OfferFullT, ReviewT } from '../types/types';
import { getOffersByCity, getOffersByFavor } from '../scripts/offers';
import { reviews } from '../mocks/reviews';

type initialStateT = {
  city: typeof City[keyof typeof City];
  offers: OfferT[];
  cityOffers: OfferT[];
  favoriteOffers: OfferT[];
  fullOffer: OfferFullT;
  reviews: ReviewT[];
  nearbyOffers: OfferT[];
};

const initialState: initialStateT = {
  city: Object.values(City)[0],
  offers: offers,
  cityOffers: getOffersByCity(offers, Object.values(City)[0]),
  favoriteOffers: getOffersByFavor(offers),
  fullOffer: fullOffer,
  reviews: reviews,
  nearbyOffers: offers.slice(1),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(getCityOffers, (state) => {
      state.cityOffers = getOffersByCity(offers, state.city);
    })
    .addCase(getFavoriteOffers, (state) => {
      state.cityOffers = getOffersByFavor(offers);
    })
    .addCase(getFullOffer, (state) => {
      state.fullOffer = fullOffer;
    })
    .addCase(getReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(getNearbyOffers, (state) => {
      state.nearbyOffers = offers.slice(1);
    });
});

export default reducer;
