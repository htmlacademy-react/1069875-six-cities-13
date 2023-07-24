import PageHeader from '../../components/page-header/page-header';
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
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default NotFoundPage;
