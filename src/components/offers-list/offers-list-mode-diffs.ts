import { OffersListMode } from '../../const/modes';

type OffersListModeDiff = {
    StyleClass: string;
};

type OffersListModeDiffs = {
  [mode: string]: OffersListModeDiff;
}

const OffersListModeDiffs: OffersListModeDiffs = {
  [OffersListMode.All]: {
    StyleClass: 'cities',
  },
  [OffersListMode.Nearby]: {
    StyleClass: 'near-places',
  },
};

export default OffersListModeDiffs;
