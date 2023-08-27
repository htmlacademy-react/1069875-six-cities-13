import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { MainDataT } from '../../types/state';
import { City } from '../../const/cities';
import { SortingType } from '../../const/others';
import { fetchOffersAction } from '../api-action';

const initialState: MainDataT = {
  city: Object.values(City)[0],
  offers: [],
  isDataLoading: false,
  activeSorting: SortingType.Default,
  activeOffer: null,
};

export const mainData = createSlice({
  name: NameSpace.MainData,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<typeof City[keyof typeof City]>) => {
      state.city = action.payload;
    },
    setActiveSorting: (state, action: PayloadAction<typeof SortingType[keyof typeof SortingType]>) => {
      state.activeSorting = action.payload;
    },
    setActiveOffer: (state, action: PayloadAction<string | null>) => {
      state.activeOffer = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isDataLoading = false;
      });
  },
});

export const { setCity, setActiveSorting, setActiveOffer } = mainData.actions;
