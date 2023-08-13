import { createAction } from '@reduxjs/toolkit';
import { City } from '../const/cities';

export const changeCity = createAction<{ city: typeof City[keyof typeof City]}>('city/changeCity');

export const getFullOffer = createAction<{ offerId: string }>('offer/getOffer');

export const getReviews = createAction<{ offerId: string }>('offer/getReviews');

export const getNearbyOffers = createAction<{ offerId: string }>('offer/getNearbyOffers');
