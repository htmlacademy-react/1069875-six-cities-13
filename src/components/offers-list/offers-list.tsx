import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';
import { OfferT } from '../../types/types';
import OffersListModeDiffs from './offers-list-mode-diffs';
import { OffersListMode } from '../../const/modes';

type OffersListProps = {
  mode: typeof OffersListMode[keyof typeof OffersListMode];
  offers: OfferT[];
  onOfferOver?: (id: string) => void;
};

function OffersList({
  mode,
  offers,
  onOfferOver,
}: OffersListProps): JSX.Element {
  const { StyleClass } = OffersListModeDiffs[mode];
  return (
    <div
      className={
        cn(
          'places__list',
          `${StyleClass}__list`,
          {'tabs__content': onOfferOver},
        )
      }
    >
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOver={
            onOfferOver &&
            (() => {
              onOfferOver(offer.id);
            })
          }
        />
      ))}
    </div>
  );
}

export default OffersList;
