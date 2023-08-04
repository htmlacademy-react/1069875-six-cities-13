import { CardMode } from '../../const/modes';

type CardModeDiff = {
    StyleClass: string;
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
    StyleClass: 'cities',
    ImgSize: {
      Width: 260,
      Height: 200,
    },
    InfoBoxClass: null,
  },
  [CardMode.Favorite]: {
    StyleClass: 'favorites',
    InfoBoxClass: 'favorites__card-info',
    ImgSize: {
      Width: 150,
      Height: 110,
    },
  },
};

export default CardModeDiffs;
