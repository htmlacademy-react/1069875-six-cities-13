import { State } from '../../types/state';
import { City } from '../../const/cities';
import { OfferT } from '../../types/offer';
import { NameSpace } from '../../const/server';
import { SortingType } from '../../const/others';

export const getCurrentCity = (state: State): typeof City[keyof typeof City] => state[NameSpace.MainData].city;

export const getCurrentSorting = (state: State): typeof SortingType[keyof typeof SortingType] => state[NameSpace.MainData].activeSorting;

export const getActiveOffer = (state: State): null | string => state[NameSpace.MainData].activeOffer;

export const getOffers = (state: State): OfferT[] => state[NameSpace.MainData].offers;

export const isOffersLoading = (state: State): boolean => state[NameSpace.MainData].isDataLoading;

export const getOfferStatus = (id: string) => (state: State): boolean => {
  const offer = state[NameSpace.MainData].offers.find((item) => item.id === id);
  return offer ? offer.isFavorite : false;
};
