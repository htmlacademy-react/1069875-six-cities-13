import { CardMode } from '../../const/modes';

type CardModeDiff = {
    CardClass: string;
    ImgBoxClass: string;
    ImgSize: {
      Width: number;
      Height: number;
    };
    InfoBoxClass: string|null;
};

type CardModeDiffs = {
  [mode: string]: CardModeDiff;
}

const CardModeDiffs: CardModeDiffs = {
  [CardMode.Default]: {
    CardClass: 'cities__card',
    ImgBoxClass: 'cities__image-wrapper',
    ImgSize: {
      Width: 260,
      Height: 200,
    },
    InfoBoxClass: null,
  },
  [CardMode.Favorite]: {
    CardClass: 'favorites__card',
    ImgBoxClass: 'favorites__image-wrapper',
    InfoBoxClass: 'favorites__card-info',
    ImgSize: {
      Width: 150,
      Height: 110,
    },
  },
};

export default CardModeDiffs;
