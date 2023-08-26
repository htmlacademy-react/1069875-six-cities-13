import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { FULL_OFFER_EXAMPLE } from '../../const/full-offer-example';
import { OfferDataT } from '../../types/state';
import { fetchOfferAction, sendReviewAction, setOfferStatusAction } from '../api-action';

const initialState: OfferDataT = {
  fullOffer: FULL_OFFER_EXAMPLE,
  reviews: [],
  nearbyOffers: [],
  offerError: false,
  isDataLoading: false,
  reviewError: false,
  isReviewSending: false,
};

export const offerData = createSlice({
  name: NameSpace.OfferData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoading = true;
        state.offerError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        const { offer, reviews, nearbyOffers } = action.payload;
        state.fullOffer = offer;
        state.reviews = reviews;
        state.nearbyOffers = nearbyOffers;
        state.isDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isDataLoading = false;
        state.offerError = true;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.isReviewSending = true;
        state.reviewError = false;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.isReviewSending = false;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.isReviewSending = false;
        state.reviewError = true;
      })
      .addCase(setOfferStatusAction.fulfilled, (state, action) => {
        const offer = action.payload;
        if (offer.id === state.fullOffer.id) {
          state.fullOffer.isFavorite = offer.isFavorite;
        }
      });
  },
});
