import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/server';
import { LoginFormT } from '../../types/state';
import { loginAction } from '../api-action';
import { LoginFormEmpty } from '../../const/others';

const initialState: LoginFormT = {
  email: LoginFormEmpty.Email,
  password: LoginFormEmpty.Password,
  isLoginDataSending: false,
};

export const loginForm = createSlice({
  name: NameSpace.LoginForm,
  initialState,
  reducers: {
    resetLoginData: (state) => {
      state.email = LoginFormEmpty.Email;
      state.password = LoginFormEmpty.Password;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoginDataSending = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.isLoginDataSending = false;
        state.email = LoginFormEmpty.Email;
        state.password = LoginFormEmpty.Password;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoginDataSending = false;
      });
  },
});

export const { resetLoginData, setEmail, setPassword } = loginForm.actions;
