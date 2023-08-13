import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getCityOffers, getFavoriteOffers } from './action';
import { City } from '../const/cities';
import { offers } from '../mocks/offers';
import { OfferT } from '../types/types';
import { getOffersByCity, getOffersByFavor } from '../scripts/offers';

type initialStateT = {
  city: typeof City[keyof typeof City];
  offers: OfferT[];
  cityOffers: OfferT[];
  favoriteOffers: OfferT[];
};

const initialState: initialStateT = {
  city: Object.values(City)[0],
  offers: offers,
  cityOffers: getOffersByCity(offers, Object.values(City)[0]),
  favoriteOffers: getOffersByFavor(offers),
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
    });
});

export default reducer;
