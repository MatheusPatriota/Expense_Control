import { Route, Routes } from 'react-router-dom';

import BaseLayout from '../layout/BaseLayout';
import Home from '../pages/Home';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
