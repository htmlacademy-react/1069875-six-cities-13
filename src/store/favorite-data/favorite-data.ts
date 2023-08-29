import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { FavoriteDataT } from '../../types/state';
import { fetchFavoriteOffersAction, setOfferStatusAction } from '../api-action';

const initialState: FavoriteDataT = {
  favoriteOffers: [],
  isDataLoading: false,
};

export const favoriteData = createSlice({
  name: NameSpace.FavoriteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(setOfferStatusAction.fulfilled, (state, action) => {
        const offer = action.payload;
        if (offer.isFavorite) {
          state.favoriteOffers.push(offer);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) => offer.id !== favoriteOffer.id);
        }
      });
  }
});
