import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { AuthorizationStatus } from '../../const/server';
import { UserDataT } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import lodash from 'lodash';

const initialState: UserDataT = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const userData = createSlice({
  name: NameSpace.UserData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = lodash.omit(action.payload, 'token');
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = lodash.omit(action.payload, 'token');
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  },
});
