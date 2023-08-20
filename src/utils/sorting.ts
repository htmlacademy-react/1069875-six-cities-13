import { SortingType } from '../const/others';
import { OfferT } from '../types/offer';

export const SortingFunction = {
  [SortingType.PriceInc]: (itemA: OfferT, itemB: OfferT) =>
    itemA.price - itemB.price
  ,
  [SortingType.PriceDec]: (itemA: OfferT, itemB: OfferT) =>
    itemB.price - itemA.price
  ,
  [SortingType.Rating]: (itemA: OfferT, itemB: OfferT) =>
    itemB.rating - itemA.rating
  ,
};
