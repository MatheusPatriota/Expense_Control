import { Route, Routes } from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/transacoes" element={<Transactions />} />
        <Route path="/cartao-de-credito" element={<Transactions />} />
        <Route path="/investimentos" element={<Transactions />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
