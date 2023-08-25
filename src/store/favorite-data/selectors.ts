import { State } from '../../types/state';
import { OfferT } from '../../types/offer';
import { NameSpace } from '../../const/server';

export const getFavoriteOffers = (state: State): OfferT[] => state[NameSpace.FavoriteData].favoriteOffers;

export const isFavoriteOffersLoading = (state: State): boolean => state[NameSpace.FavoriteData].isDataLoading;

export const isFavoriteDataActual = (state: State): boolean => state[NameSpace.FavoriteData].isFavoriteOffersActual;

export const getFavoriteOffersCount = (state: State): number => state[NameSpace.FavoriteData].favoriteOffersCount;