import { createAction } from '@reduxjs/toolkit';
import { City } from '../const/cities';
import { AuthorizationStatus } from '../const/server';
import { OfferFullT, OfferT } from '../types/offer';
import { ReviewT } from '../types/review';
import { AuthUserT } from '../types/user';

export const setCity = createAction<typeof City[keyof typeof City]>('main/changeCity');

export const setAuthorizationStatus = createAction<typeof AuthorizationStatus[keyof typeof AuthorizationStatus]>('user/changeAuthorizationStatus');

export const setUserData = createAction<Omit<AuthUserT, 'token'> | null>('user/getOffers');

export const getOffers = createAction<OfferT[]>('main/getOffers');

export const getFavoriteOffers = createAction<OfferT[]>('favorite/getOffers');

export const setFavoriteOffersCount = createAction<number>('favorite/getOffersCount');

export const setFavoriteOffersStatus = createAction<boolean>('favorite/isDataActual');

export const getFullOffer = createAction<OfferFullT>('offer/getOffer');

export const getReviews = createAction<ReviewT[]>('offer/getReviews');

export const getNearbyOffers = createAction<OfferT[]>('offer/getNearbyOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setFavoriteOffersDataLoadingStatus = createAction<boolean>('data/setFavoriteOffersDataLoadingStatus');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');
