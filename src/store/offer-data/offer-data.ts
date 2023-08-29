import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { FULL_OFFER_EXAMPLE } from '../../const/full-offer-example';
import { OfferDataT } from '../../types/state';
import { fetchOfferAction, setOfferStatusAction } from '../api-action';
import { ReviewT } from '../../types/review';

const initialState: OfferDataT = {
  fullOffer: FULL_OFFER_EXAMPLE,
  isFavorite: false,
  reviews: [],
  nearbyOffers: [],
  offerError: false,
  isDataLoading: false,
};

export const offerData = createSlice({
  name: NameSpace.OfferData,
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<ReviewT>) => {
      state.reviews.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoading = true;
        state.offerError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        const { offer, reviews, nearbyOffers } = action.payload;
        state.fullOffer = offer;
        state.isFavorite = offer.isFavorite;
        state.reviews = reviews;
        state.nearbyOffers = nearbyOffers;
        state.isDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isDataLoading = false;
        state.offerError = true;
      })
      .addCase(setOfferStatusAction.fulfilled, (state, action) => {
        const offer = action.payload;
        if (offer.id === state.fullOffer.id) {
          state.isFavorite = offer.isFavorite;
        }
      });
  },
});

export const { addReview } = offerData.actions;
