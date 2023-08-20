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

  try {
    const { data: offer } = await api.get<OfferFullT>(APIRoute.Offer.Info(id));
    dispatch(getFullOffer(offer));

    const { data: reviews } = await api.get<ReviewT[]>(APIRoute.Offer.Reviews(id));
    dispatch(getReviews(reviews));

    const { data: nearbyOffers } = await api.get<OfferT[]>(APIRoute.Offer.NearbyOffers(id));
    dispatch(getNearbyOffers(nearbyOffers));
  } catch {
    dispatch(setOfferDataLoadingStatus(false));
  }

  dispatch(setOfferDataLoadingStatus(false));
});
