export type LocationT = {
  latitude: number;
  longitude: number;
  zoom: number;
};

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

type UserT = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type ReviewT = {
  id: string;
  date: string;
  user: UserT;
  comment: string;
  rating: number;
};
