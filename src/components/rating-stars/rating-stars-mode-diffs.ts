import { RatingStarsMode } from '../../const/modes';

type RatingStarsModeDiff = {
    StyleClass: string;
    WithNumber: boolean;
};

type RatingStarsModeDiffs = {
  [mode: string]: RatingStarsModeDiff;
}

const RatingStarsModeDiffs: RatingStarsModeDiffs = {
  [RatingStarsMode.Card]: {
    StyleClass: 'place-card',
    WithNumber: false,
  },
  [RatingStarsMode.Page]: {
    StyleClass: 'offer',
    WithNumber: true,
  },
  [RatingStarsMode.Review]: {
    StyleClass: 'reviews',
    WithNumber: false,
  },
};

export default RatingStarsModeDiffs;
