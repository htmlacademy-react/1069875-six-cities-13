import Logo from '../logo/logo';
import UserMenu from '../user-menu/user-menu';
import { LogoMode } from '../../const/modes';
import { memo } from 'react';

type PageHeaderProps = {
  isUserMenuActive?: boolean;
  isMainPage?: boolean;
};

function PageHeader({ isUserMenuActive = true, isMainPage = false }: PageHeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo mode={LogoMode.Header} isNotActive={isMainPage}/>
          </div>
          {isUserMenuActive && <UserMenu />}
        </div>
      </div>
    </header>
  );
}

const PageHeaderMemo = memo(PageHeader);

export default PageHeaderMemo;
