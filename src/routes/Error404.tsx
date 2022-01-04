import './Error404.scss';
import { Link } from 'react-router-dom';

export default function Error404() {
  const pathName = window.location.pathname;

  return (
    <section className='error404 container'>
      <div>
        <h1>404</h1>
      </div>
      <div>
        <h2>Something is missing !</h2>
        <p className='error-message'>
          Sorry, the following page <span className='pathname'>{pathName}</span>{' '}
          seems to have disappeared. You should go back to the homepage until we
          find it.
        </p>
        <Link to='/' className='back-homepage'>
          Back to homepage ⮐
        </Link>
      </div>
    </section>
  );
}
