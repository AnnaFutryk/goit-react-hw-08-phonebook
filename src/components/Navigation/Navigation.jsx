import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </nav>
    </>
  );
};
