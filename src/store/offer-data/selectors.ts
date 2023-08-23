import { State } from '../../types/state';
import { OfferT, OfferFullT } from '../../types/offer';
import { ReviewT } from '../../types/review';
import { NameSpace } from '../../const/server';

export const getOffer = (state: State): OfferFullT => state[NameSpace.OfferData].fullOffer;

export const getReviews = (state: State): ReviewT[] => state[NameSpace.OfferData].reviews;

export const getNearbyOffers = (state: State): OfferT[] => state[NameSpace.OfferData].nearbyOffers;

export const hasOfferError = (state: State): boolean => state[NameSpace.OfferData].offerError;

export const isOfferLoading = (state: State): boolean => state[NameSpace.OfferData].isDataLoading;

export const hasReviewError = (state: State): boolean => state[NameSpace.OfferData].reviewError;

export const isReviewSending = (state: State): boolean => state[NameSpace.OfferData].isReviewSending;
