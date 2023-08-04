import { OffersListMode } from '../../const/modes';

type OffersListModeDiff = {
    StyleClass: string;
};

type OffersListModeDiffs = {
  [mode: string]: OffersListModeDiff;
}

const OffersListModeDiffs: OffersListModeDiffs = {
  [OffersListMode.All]: {
    StyleClass: 'cities__places-list',
  },
  [OffersListMode.Nearby]: {
    StyleClass: 'near-places__list',
  },
};

export default OffersListModeDiffs;
