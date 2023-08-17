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
  const { data } = await api.get<OfferT[]>(APIRoute.Offers);
  dispatch(getOffers(data));
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  void,
  undefined,
  asyncThunkConfig
>('data/fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferT[]>(APIRoute.Favorite);
  dispatch(getFavoriteOffers(data));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  asyncThunkConfig
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferFullT>(APIRoute.Offer.Info(id));
  dispatch(getFullOffer(data));
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  string,
  asyncThunkConfig
>('data/fetchReviews', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewT[]>(APIRoute.Offer.Reviews(id));
  dispatch(getReviews(data));
});

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  string,
  asyncThunkConfig
>('data/fetchNearbyOffers', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferT[]>(APIRoute.Offer.NearbyOffers(id));
  dispatch(getNearbyOffers(data));
});
