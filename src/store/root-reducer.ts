import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const/server';
import { userData } from './user-data/user-data';
import { mainData } from './main-data/main-data';
import { offerData } from './offer-data/offer-data';
import { favoriteData } from './favorite-data/favorite-data';
import { reviewForm } from './review-form/review-form';
import { loginForm } from './login-form/login-form';

export const rootReducer = combineReducers({
  [NameSpace.UserData]: userData.reducer,
  [NameSpace.MainData]: mainData.reducer,
  [NameSpace.OfferData]: offerData.reducer,
  [NameSpace.FavoriteData]: favoriteData.reducer,
  [NameSpace.ReviewForm]: reviewForm.reducer,
  [NameSpace.LoginForm]: loginForm.reducer,
});
