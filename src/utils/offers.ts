import { OfferT } from '../types/offer';
import { City } from '../const/cities';
import { SortingType } from '../const/others';
import { SortingFunction } from './sorting';

export const getOffersByCity = (
  offers: OfferT[],
  city: typeof City[keyof typeof City]
): OfferT[] => offers.filter((offer) => offer.city.name === city);

export const getOffersSorted = (offers: OfferT[], sorting: typeof SortingType[keyof typeof SortingType]): OfferT[] =>
  SortingFunction[sorting]
    ? [...offers].sort(SortingFunction[sorting])
    : offers;
