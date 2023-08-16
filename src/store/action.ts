import { createAction } from '@reduxjs/toolkit';
import { City } from '../const/cities';

export const changeCity = createAction<{ city: typeof City[keyof typeof City]}>('main/changeCity');

export const getOffers = createAction('main/getOffers');

export const getFavoriteOffers = createAction('favorite/getOffers');

export const getFullOffer = createAction<{ offerId: string }>('offer/getOffer');

export const getReviews = createAction<{ offerId: string }>('offer/getReviews');

export const getNearbyOffers = createAction<{ offerId: string }>('offer/getNearbyOffers');
