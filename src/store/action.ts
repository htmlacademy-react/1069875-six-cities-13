import { createAction } from '@reduxjs/toolkit';
import { City } from '../const/cities';
import { OfferFullT, OfferT, ReviewT } from '../types/types';

export const changeCity = createAction<{ city: typeof City[keyof typeof City]}>('main/changeCity');

export const getOffers = createAction<OfferT[]>('main/getOffers');

export const getFavoriteOffers = createAction<OfferT[]>('favorite/getOffers');

export const getFullOffer = createAction<OfferFullT>('offer/getOffer');

export const getReviews = createAction<ReviewT[]>('offer/getReviews');

export const getNearbyOffers = createAction<OfferT[]>('offer/getNearbyOffers');
