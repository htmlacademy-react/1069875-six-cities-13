import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getCityOffers } from './action';
import { City } from '../const/cities';
import { offers } from '../mocks/offers';
import { OfferT } from '../types/types';

type initialStateT = {
  city: typeof City[keyof typeof City];
  offers: OfferT[];
  cityOffers: OfferT[];
};

const initialState: initialStateT = {
  city: Object.values(City)[0],
  offers: offers,
  cityOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(getCityOffers, (state) => {
      state.cityOffers = offers;
    });
});

export default reducer;
