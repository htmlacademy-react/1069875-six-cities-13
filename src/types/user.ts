import { TokenT } from '../services/token';

export type UserT = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type AuthDataT = {
  email: string;
  password: string;
};

export type AuthUserT = UserT & Omit<AuthDataT, 'password'> & {
  token: TokenT;
}
