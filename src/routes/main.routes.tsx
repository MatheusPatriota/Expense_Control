import { Route, Routes } from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";
import CreditCard from "../pages/CreditCard";
import Investments from "../pages/Investments";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/transacoes" element={<Transactions />} />
        <Route path="/cartao-de-credito" element={<CreditCard />} />
        <Route path="/investimentos" element={<Investments />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
