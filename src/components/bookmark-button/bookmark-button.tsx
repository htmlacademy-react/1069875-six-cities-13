import cn from 'classnames';
import { BookmarkMode } from '../../const/modes';
import BookmarkModeDiffs from './bookmark-mode-diffs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { isUserAuth } from '../../store/user-data/selectors';
import { useNavigate } from 'react-router-dom';
import { AppRoute, OfferStatus } from '../../const/server';
import { setOfferStatusAction } from '../../store/api-action';
import { getOfferStatus } from '../../store/favorite-data/selectors';

type BookmarkButtonProps = {
  mode: typeof BookmarkMode[keyof typeof BookmarkMode];
  id: string;
};

function BookmarkButton({ mode, id }: BookmarkButtonProps): JSX.Element {
  const { StyleClass, ImgSize } = BookmarkModeDiffs[mode];
  const isAuth = useAppSelector(isUserAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isFavorite = useAppSelector(getOfferStatus(id));

  const handleButtonClick = () => {
    if (!isAuth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(setOfferStatusAction({id, status: isFavorite ? OfferStatus.NotFavorite : OfferStatus.Favorite}));
  };
  return (
    <button
      onClick={handleButtonClick}
      className={cn(
        'button',
        `${StyleClass}__bookmark-button`,
        {[`${StyleClass}__bookmark-button--active`]: isFavorite},
      )}
      type="button"
    >
      <svg className={`${StyleClass}__bookmark-icon`} width={ImgSize.Width} height={ImgSize.Height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
