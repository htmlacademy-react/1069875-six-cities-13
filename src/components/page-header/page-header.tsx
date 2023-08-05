import Logo from '../logo/logo';
import PageNav from '../page-nav/page-nav';
import { LogoMode } from '../../const/modes';

type PageHeaderProps = {
  isNavActive?: boolean;
  isMainPage?: boolean;
};

function PageHeader({ isNavActive = true, isMainPage = false }: PageHeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo mode={LogoMode.Header} isNotActive={isMainPage}/>
          </div>
          {isNavActive && <PageNav />}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
