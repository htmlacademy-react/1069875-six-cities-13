import { OfferT } from '../types/types';
import { City } from '../const/cities';
import { SortingFunction } from './sorting';

export const getOffersByCity = (
  offers: OfferT[],
  city: typeof City[keyof typeof City]
): OfferT[] => offers.filter((offer) => offer.city.name === city);

export const getOffersByFavor = (offers: OfferT[]): OfferT[] =>
  offers.filter(({ isFavorite }) => isFavorite);

export const getOffersSorted = (offers: OfferT[], sorting: string): OfferT[] =>
  SortingFunction[sorting]
    ? [...offers].sort(SortingFunction[sorting])
    : offers;
