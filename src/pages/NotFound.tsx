import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <div className="not-found__code" aria-hidden="true">404</div>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__text">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link to="/" className="btn btn--primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}
