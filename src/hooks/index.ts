import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {State, AppDispatch} from '../types/state';
import { getOfferStatus } from '../store/offer-data/selectors';
import { getActiveOffer } from '../store/main-data/selectors';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useOfferFavoriteFlag = () => useAppSelector(getOfferStatus);

export const useActiveOffer = () => useAppSelector(getActiveOffer);
