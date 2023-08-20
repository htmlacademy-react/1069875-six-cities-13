import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferT, OfferFullT, ReviewT } from '../types/types';
import { AuthDataT, AuthUserT } from '../types/user';
import { APIRoute, AuthorizationStatus } from '../const/server';
import {
  getOffers,
  getFavoriteOffers,
  setFavoriteOffersCount,
  setFavoriteOffersStatus,
  getFullOffer,
  getReviews,
  getNearbyOffers,
  setOffersDataLoadingStatus,
  setFavoriteOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setAuthorizationStatus,
  setUserData,
} from './action';
import { dropToken, saveToken } from '../services/token';

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
  dispatch(setFavoriteOffersCount(data.length));
  dispatch(setFavoriteOffersStatus(true));
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

    const { data: reviews } = await api.get<ReviewT[]>(
      APIRoute.Offer.Reviews(id)
    );
    dispatch(getReviews(reviews));

    const { data: nearbyOffers } = await api.get<OfferT[]>(
      APIRoute.Offer.NearbyOffers(id)
    );
    dispatch(getNearbyOffers(nearbyOffers));
  } catch {
    dispatch(setOfferDataLoadingStatus(false));
  }

  dispatch(setOfferDataLoadingStatus(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  asyncThunkConfig
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  } catch {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<void, AuthDataT, asyncThunkConfig>(
  'user/login',
  async (authData, { dispatch, extra: api }) => {
    const { data } = await api.post<AuthUserT>(APIRoute.Login, authData);
    const { token, ...userInfo } = data;
    saveToken(token);
    setUserData(userInfo);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);
