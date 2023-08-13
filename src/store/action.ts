import { createAction } from '@reduxjs/toolkit';
import { City } from '../const/cities';

export const changeCity = createAction<{ city: typeof City[keyof typeof City]}>('city/changeCity');

export const getCityOffers = createAction('city/getOffers');

export const getFavoriteOffers = createAction('favorite/getOffers');
