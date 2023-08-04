import { CardMode } from '../../const/modes';

type CardModeDiff = {
  StyleClass: string;
  ImgSize: ImageSize;
  InfoBoxClass: string | null;
};

type CardModeDiffs = {
  [mode: string]: CardModeDiff;
};

type ImageSize = {
  Width: number;
  Height: number;
};

type ImageSizes = {
  [mode: string]: ImageSize;
};

const ImageSizes: ImageSizes = {
  Default: {
    Width: 260,
    Height: 200,
  },
  Small: {
    Width: 150,
    Height: 110,
  },
};

const CardModeDiffs: CardModeDiffs = {
  [CardMode.Default]: {
    StyleClass: 'cities',
    ImgSize: ImageSizes.Default,
    InfoBoxClass: null,
  },
  [CardMode.Favorite]: {
    StyleClass: 'favorites',
    ImgSize: ImageSizes.Small,
    InfoBoxClass: 'favorites__card-info',
  },
  [CardMode.Nearby]: {
    StyleClass: 'near-places',
    ImgSize: ImageSizes.Default,
    InfoBoxClass: null,
  },
};

export default CardModeDiffs;
