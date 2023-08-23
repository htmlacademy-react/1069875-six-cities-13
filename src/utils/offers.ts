import { OfferT } from '../types/offer';
import { City } from '../const/cities';
import { SortingFunction } from './sorting';

export const getOffersByCity = (
  offers: OfferT[],
  city: typeof City[keyof typeof City]
): OfferT[] => offers.filter((offer) => offer.city.name === city);

export const getOffersSorted = (offers: OfferT[], sorting: string): OfferT[] =>
  SortingFunction[sorting]
    ? [...offers].sort(SortingFunction[sorting])
    : offers;
