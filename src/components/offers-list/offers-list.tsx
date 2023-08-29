import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';
import { OfferT } from '../../types/offer';
import OffersListModeDiffs from './offers-list-mode-diffs';
import { OffersListMode, CardMode } from '../../const/modes';
import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveOffer } from '../../store/main-data/main-data';
import { getCurrentSorting } from '../../store/main-data/selectors';
import { getOffersSorted } from '../../utils/offers';

type OffersListProps = {
  mode: typeof OffersListMode[keyof typeof OffersListMode];
  cardMode: typeof CardMode[keyof typeof CardMode];
  offers: OfferT[];
  isInteractive: boolean;
};

function OffersList({
  mode,
  cardMode,
  offers,
  isInteractive = false,
}: OffersListProps): JSX.Element {
  const { StyleClass } = OffersListModeDiffs[mode];
  const activeSorting = useAppSelector(getCurrentSorting);
  const dispatch = useAppDispatch();

  const sortedOffers = useMemo(() => getOffersSorted(offers, activeSorting), [offers, activeSorting]);

  const handleCardMouseOver = useCallback((id: string) => {
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
            dispatch(setActiveOffer(null));
          })
          :
          undefined
      }
    >
      {sortedOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          mode={cardMode}
          offer={offer}
          onMouseOver={
            isInteractive ?
              handleCardMouseOver
              :
              undefined
          }
        />
      ))}
    </div>
  );
}

export default OffersList;
