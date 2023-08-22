import { OfferT, OfferFullT } from '../types/offer';
import { LocationT } from '../types/location';

export const getPointsFromOffers = (
  offers: Array<OfferT | OfferFullT>
): (LocationT & { id: string })[] =>
  offers.map((offerNearby) => ({
    ...offerNearby.location,
    id: offerNearby.id,
  }));
