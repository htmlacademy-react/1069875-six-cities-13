import { Offer } from '../types/types';

export const offers: Offer[] = [
  {
    id: '937e13a8-d128-42fc-9b67-b8b29e41b0dc',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 178,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.7,
  },
  {
    id: '4a727eb3-666b-4639-9e6e-220d541a1509',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 236,
    previewImage: 'https://13.design.pages.academy/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.3,
  },
  {
    id: 'bbe4e75a-2de2-482b-9791-86b78eecee82',
    title: 'Tile House',
    type: 'apartment',
    price: 400,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.5,
  },
  {
    id: '4beaadb9-18f2-4214-b0f5-c1e995365c0c',
    title: 'House in countryside',
    type: 'house',
    price: 804,
    previewImage: 'https://13.design.pages.academy/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
  },
];
