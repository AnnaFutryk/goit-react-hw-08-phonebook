import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<p>loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
