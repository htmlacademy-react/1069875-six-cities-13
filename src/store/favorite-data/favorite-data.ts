import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { FavoriteDataT, StatusDataT } from '../../types/state';
import { fetchFavoriteOffersAction, setOfferStatusAction } from '../api-action';

const initialState: FavoriteDataT = {
  favoriteOffers: [],
  favoriteOffersCount: 0,
  isFavoriteOffersActual: false,
  isDataLoading: false,
  awaitedStatusData: null,
};

export const favoriteData = createSlice({
  name: NameSpace.FavoriteData,
  initialState,
  reducers: {
    setAwaitedStatusData: (state, action: PayloadAction<StatusDataT>) => {
      state.awaitedStatusData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoriteOffersCount = action.payload.length;
        state.isDataLoading = false;
        state.isFavoriteOffersActual = true;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(setOfferStatusAction.fulfilled, (state, action) => {
        const isFavoriteInc = action.payload.isFavorite;
        if (isFavoriteInc) {
          state.favoriteOffersCount++;
        } else {
          state.favoriteOffersCount--;
        }
        state.isFavoriteOffersActual = false;
        state.awaitedStatusData = null;
      });
  }
});

export const { setAwaitedStatusData } = favoriteData.actions;
