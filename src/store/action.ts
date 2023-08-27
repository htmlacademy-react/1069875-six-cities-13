import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const/server';

export const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('app/redirectToRoute');
