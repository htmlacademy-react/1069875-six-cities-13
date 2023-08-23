import { OfferFullT } from '../types/offer';

export const FULL_OFFER_EXAMPLE: OfferFullT = {
  id: '',
  title: 'Title',
  type: 'apartment',
  price: 0,
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  isFavorite: false,
  isPremium: false,
  rating: 0,
  description: '',
  bedrooms: 0,
  goods: [],
  host: {
    name: '',
    avatarUrl: 'img/avatar.svg',
    isPro: false,
  },
  images: [],
  maxAdults: 0,
};
