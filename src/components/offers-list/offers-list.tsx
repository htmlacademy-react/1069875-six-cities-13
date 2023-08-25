import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';
import { OfferT } from '../../types/offer';
import OffersListModeDiffs from './offers-list-mode-diffs';
import { OffersListMode } from '../../const/modes';
import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveOffer } from '../../store/main-data/main-data';
import { getCurrentSorting } from '../../store/main-data/selectors';
import { getOffersSorted } from '../../utils/offers';

type OffersListProps = {
  mode: typeof OffersListMode[keyof typeof OffersListMode];
  offers: OfferT[];
  isInteractive: boolean;
};

function OffersList({
  mode,
  offers,
  isInteractive = false,
}: OffersListProps): JSX.Element {
  const { StyleClass } = OffersListModeDiffs[mode];
  const activeSorting = useAppSelector(getCurrentSorting);
  const dispatch = useAppDispatch();

  const sortedOffers = useMemo(() => getOffersSorted(offers, activeSorting), [offers, activeSorting]);

  const handleMouseMove = useCallback((id: string | null) => {
    dispatch(setActiveOffer(id));
  }, [dispatch]);

  return (
    <div
      className={
        cn(
          `places__list ${StyleClass}`,
          {'tabs__content': isInteractive},
        )
      }
      onMouseOut={
        isInteractive ?
          (() => {
            handleMouseMove(null);
          })
          :
          undefined
      }
    >
      {sortedOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOver={
            isInteractive ?
              (() => {
                handleMouseMove(offer.id);
              })
              :
              undefined
          }
        />
      ))}
    </div>
  );
}

export default OffersList;
