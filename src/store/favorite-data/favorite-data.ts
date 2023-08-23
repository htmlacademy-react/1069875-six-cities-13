import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { FavoriteDataT } from '../../types/state';
import { fetchFavoriteOffersAction } from '../api-action';

const initialState: FavoriteDataT = {
  favoriteOffers: [],
  favoriteOffersCount: 0,
  isFavoriteOffersActual: false,
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
        state.favoriteOffersCount = state.favoriteOffers.length;
        state.isDataLoading = false;
        state.isFavoriteOffersActual = true;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isDataLoading = false;
      });
  }
});
