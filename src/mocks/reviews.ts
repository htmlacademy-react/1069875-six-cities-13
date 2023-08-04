import { ReviewT } from '../types/types';

export const reviews: ReviewT[] = [
  {
    id: 'b67ccfd5-b953-4a31-8c8d-bd003cd6b00a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: 'b53ddfd5-b553-4a70-8c8d-bd089cd6b62a',
    date: '2021-11-03T10:10:50.379Z',
    user: {
      name: 'Sam',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 1,
  },
];
