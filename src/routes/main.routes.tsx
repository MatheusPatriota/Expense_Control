import { Route, Routes } from 'react-router-dom';

import BaseLayout from '../layout/BaseLayout';
import Home from '../pages/Home';
import Investments from '../pages/Investments';
import Transactions from '../pages/Transactions';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/operacoes" element={<Transactions />} />
        <Route path="/investimentos" element={<Investments />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
