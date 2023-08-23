import { State } from '../../types/state';
import { City } from '../../const/cities';
import { OfferT } from '../../types/offer';
import { NameSpace } from '../../const/server';

export const getCurrentCity = (state: State): typeof City[keyof typeof City] => state[NameSpace.MainData].city;

export const getOffers = (state: State): OfferT[] => state[NameSpace.MainData].offers;

export const isOffersLoading = (state: State): boolean => state[NameSpace.MainData].isDataLoading;
