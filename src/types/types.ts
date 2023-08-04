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
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

export type OfferFullT = Omit<OfferT, 'previewImage'> & OfferAdditionT;

