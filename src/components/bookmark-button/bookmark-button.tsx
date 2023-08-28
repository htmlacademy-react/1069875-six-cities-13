import cn from 'classnames';
import { BookmarkMode } from '../../const/modes';
import BookmarkModeDiffs from './bookmark-mode-diffs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { isUserAuth } from '../../store/user-data/selectors';
import { useNavigate } from 'react-router-dom';
import { AppRoute, OfferStatus } from '../../const/server';
import { setOfferStatusAction } from '../../store/api-action';

type BookmarkButtonProps = {
  mode: typeof BookmarkMode[keyof typeof BookmarkMode];
  id: string;
  isActive: boolean | (() => boolean);
};

function BookmarkButton({ mode, id, isActive }: BookmarkButtonProps): JSX.Element {
  const { StyleClass, ImgSize } = BookmarkModeDiffs[mode];
  const isAuth = useAppSelector(isUserAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = typeof isActive === 'function' ? isActive() : isActive;

  const handleButtonClick = () => {
    if (!isAuth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(setOfferStatusAction({id, status: status ? OfferStatus.NotFavorite : OfferStatus.Favorite}));
  };
  return (
    <button
      onClick={handleButtonClick}
      className={cn(
        'button',
        `${StyleClass}__bookmark-button`,
        {[`${StyleClass}__bookmark-button--active`]: status},
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
