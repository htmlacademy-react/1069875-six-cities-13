import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferT, OfferFullT, ReviewT } from '../types/types';
import { APIRoute } from '../const/server';
import {
  getOffers,
  getFavoriteOffers,
  getFullOffer,
  getReviews,
  getNearbyOffers,
  setOffersDataLoadingStatus,
  setFavoriteOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setReviewsDataLoadingStatus,
  setNearbyOffersDataLoadingStatus,
} from './action';

type asyncThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  asyncThunkConfig
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<OfferT[]>(APIRoute.Offers);
  dispatch(getOffers(data));
  dispatch(setOffersDataLoadingStatus(false));
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  asyncThunkConfig
>('data/fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFavoriteOffersDataLoadingStatus(true));
  const { data } = await api.get<OfferT[]>(APIRoute.Favorite);
  dispatch(getFavoriteOffers(data));
  dispatch(setFavoriteOffersDataLoadingStatus(false));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  asyncThunkConfig
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setOfferDataLoadingStatus(true));
  const { data } = await api.get<OfferFullT>(APIRoute.Offer.Info(id));
  dispatch(getFullOffer(data));
  dispatch(setOfferDataLoadingStatus(false));
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  string,
  asyncThunkConfig
>('data/fetchReviews', async (id, { dispatch, extra: api }) => {
  dispatch(setReviewsDataLoadingStatus(true));
  const { data } = await api.get<ReviewT[]>(APIRoute.Offer.Reviews(id));
  dispatch(getReviews(data));
  dispatch(setReviewsDataLoadingStatus(false));
});

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  string,
  asyncThunkConfig
>('data/fetchNearbyOffers', async (id, { dispatch, extra: api }) => {
  dispatch(setNearbyOffersDataLoadingStatus(true));
  const { data } = await api.get<OfferT[]>(APIRoute.Offer.NearbyOffers(id));
  dispatch(getNearbyOffers(data));
  dispatch(setNearbyOffersDataLoadingStatus(false));
});
