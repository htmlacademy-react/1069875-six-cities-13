import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State, StatusDataT } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferT, OfferFullT, OfferAdditionT } from '../types/offer';
import { ReviewT, ReviewDataT } from '../types/review';
import { AuthDataT, AuthUserT } from '../types/user';
import { APIRoute, AppRoute } from '../const/server';
import { dropToken, saveToken } from '../services/token';
import { addReview } from './offer-data/offer-data';
import { redirectToRoute } from './action';

type asyncThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<
  OfferT[],
  undefined,
  asyncThunkConfig
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferT[]>(APIRoute.Offers);
  return data;
});

export const fetchFavoriteOffersAction = createAsyncThunk<
  OfferT[],
  undefined,
  asyncThunkConfig
>('data/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferT[]>(APIRoute.Favorite);
  return data;
});

export const setOfferStatusAction = createAsyncThunk<
  OfferT & OfferAdditionT,
  StatusDataT,
  asyncThunkConfig
>('data/setOfferStatus', async ({id, status}, { extra: api }) => {
  const { data } = await api.post<OfferT & OfferAdditionT>(APIRoute.Offer.FavoriteStatus(id, status));
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  {offer: OfferFullT; reviews: ReviewT[]; nearbyOffers: OfferT[]},
  string,
  asyncThunkConfig
>('data/fetchOffer', async (id, { extra: api }) => {
  const { data: offer } = await api.get<OfferFullT>(APIRoute.Offer.Info(id));
  const { data: reviews } = await api.get<ReviewT[]>(
    APIRoute.Offer.Reviews(id)
  );
  const { data: nearbyOffers } = await api.get<OfferT[]>(
    APIRoute.Offer.NearbyOffers(id)
  );
  return {offer, reviews, nearbyOffers};
});

export const checkAuthAction = createAsyncThunk<
  AuthUserT,
  undefined,
  asyncThunkConfig
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<AuthUserT>(APIRoute.Login);
  dispatch(fetchFavoriteOffersAction());
  return data;
});

export const loginAction = createAsyncThunk<AuthUserT, AuthDataT, asyncThunkConfig>(
  'user/login',
  async (authData, { dispatch, extra: api }) => {
    const { data } = await api.post<AuthUserT>(APIRoute.Login, authData);
    dispatch(fetchFavoriteOffersAction());
    dispatch(redirectToRoute(AppRoute.Root));
    const { token } = data;
    saveToken(token);
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, asyncThunkConfig>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const sendReviewAction = createAsyncThunk<void, {id: string; review: ReviewDataT}, asyncThunkConfig>(
  'data/sendReview',
  async ({ id, review}, { dispatch, extra: api }) => {
    const { data } = await api.post<ReviewT>(APIRoute.Offer.Reviews(id), review);
    dispatch(addReview(data));
  }
);
