import { State } from '../../types/state';
import { NameSpace } from '../../const/server';

export const getEmail = (state: State): string => state[NameSpace.LoginForm].email;

export const getPassword = (state: State): string => state[NameSpace.LoginForm].password;

export const isLoginDataSending = (state: State): boolean => state[NameSpace.LoginForm].isLoginDataSending;
