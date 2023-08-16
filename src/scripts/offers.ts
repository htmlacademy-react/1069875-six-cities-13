import { OfferT } from '../types/types';
import { City } from '../const/cities';

export const getOffersByCity = (
  offers: OfferT[],
  city: typeof City[keyof typeof City]
): OfferT[] => offers.filter((offer) => offer.city.name === city);

export const getOffersByFavor = (
  offers: OfferT[]
): OfferT[] => offers.filter(({ isFavorite }) => isFavorite);
