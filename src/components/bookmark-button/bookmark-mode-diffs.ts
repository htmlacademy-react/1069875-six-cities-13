import { BookmarkMode } from '../../const/modes';

type BookmarkModeDiff = {
    StyleClass: string;
    ImgSize: {
      Width: number;
      Height: number;
    };
};

type BookmarkModeDiffs = {
  [mode: string]: BookmarkModeDiff;
}

const BookmarkModeDiffs: BookmarkModeDiffs = {
  [BookmarkMode.Card]: {
    StyleClass: 'place-card',
    ImgSize: {
      Width: 18,
      Height: 19,
    },
  },
  [BookmarkMode.Page]: {
    StyleClass: 'offer',
    ImgSize: {
      Width: 31,
      Height: 33,
    },
  },
};

export default BookmarkModeDiffs;
