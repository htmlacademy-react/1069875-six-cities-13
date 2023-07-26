import Logo from '../../components/logo/logo';
import PageHeader from '../../components/page-header/page-header';
import { LogoMode } from '../../const';
import './not-found-style.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <PageHeader />
      <main className="page__main">
        <div className="container">
          <h1 className="no-page">404. Page not found</h1>
        </div>
      </main>

      <footer className="footer container">
        <Logo mode={LogoMode.Footer}/>
      </footer>
    </div>
  );
}

export default NotFoundPage;
