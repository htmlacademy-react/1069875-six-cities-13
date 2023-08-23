import { UserT } from './user';
import { LocationT } from './location';

export type OfferT = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: LocationT;
  };
  location: LocationT;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

type OfferAdditionT = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserT;
  images: string[];
  maxAdults: number;
};

export type OfferFullT = Omit<OfferT, 'previewImage'> & OfferAdditionT;
