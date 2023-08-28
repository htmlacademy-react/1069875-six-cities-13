import { State } from '../../types/state';
import { AuthUserT } from '../../types/user';
import { NameSpace, AuthorizationStatus } from '../../const/server';

export const isUserAuth = (state: State): boolean => state[NameSpace.UserData].authorizationStatus === AuthorizationStatus.Auth;

export const getUserData = (state: State): Omit<AuthUserT, 'token'> | null => state[NameSpace.UserData].userData;

export const isAuthRequesting = (state: State): boolean => state[NameSpace.UserData].authorizationStatus === AuthorizationStatus.Unknown;
