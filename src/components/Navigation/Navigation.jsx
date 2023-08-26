import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <h1>Navigation</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </>
  );
};
