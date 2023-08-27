import cn from 'classnames';
import { SortingType } from '../../const/others';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentSorting } from '../../store/main-data/selectors';
import { setActiveSorting } from '../../store/main-data/main-data';

function Sorting(): JSX.Element {
  const activeSorting = useAppSelector(getCurrentSorting);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpen ? 'places__options--opened' : ''
        }`}
      >
        {Object.values(SortingType).map((type) => (
          <li
            key={`sorting-${type}`}
            onClick={() => {
              dispatch(setActiveSorting(type));
              setIsOpen(false);
            }}
            className={cn('places__option', {
              'places__option--active': type === activeSorting,
            })}
            tabIndex={0}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
