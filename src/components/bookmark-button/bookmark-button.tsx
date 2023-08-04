import cn from 'classnames';
import { BookmarkMode } from '../../const/modes';
import BookmarkModeDiffs from './bookmark-mode-diffs';

type BookmarkButtonProps = {
  mode: typeof BookmarkMode[keyof typeof BookmarkMode];
  isActive: boolean;
};

function BookmarkButton({ mode, isActive }: BookmarkButtonProps): JSX.Element {
  const { StyleClass, ImgSize } = BookmarkModeDiffs[mode];
  return (
    <button
      className={cn(
        'button',
        `${StyleClass}__bookmark-button`,
        {[`${StyleClass}__bookmark-button--active`]: isActive},
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
