import { OfferT } from '../types/offer';
import { City } from '../const/cities';
import { SortingType, NEARBY_OFFERS_MAX_COUNT } from '../const/others';
import { SortingFunction } from './sorting';
import lodash from 'lodash';

export const getOffersByCity = (
  offers: OfferT[],
  city: typeof City[keyof typeof City]
): OfferT[] => offers.filter((offer) => offer.city.name === city);

export const getOffersSorted = (
  offers: OfferT[],
  sorting: typeof SortingType[keyof typeof SortingType]
): OfferT[] =>
  SortingFunction[sorting]
    ? [...offers].sort(SortingFunction[sorting])
    : offers;

export const getRandomNearbyOffers = (offers: OfferT[]): OfferT[] =>
  lodash.sampleSize(offers, NEARBY_OFFERS_MAX_COUNT);
