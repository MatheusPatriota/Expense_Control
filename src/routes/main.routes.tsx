import { Route, Routes } from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/Home";
import Investments from "../pages/Investments";
import Transactions from "../pages/Transactions";
import Login from "../pages/Login";
import withAuth from "../routes/WithAuth"; 

const ProtectedBaseLayout = withAuth(BaseLayout);

function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} index />
      <Route element={<ProtectedBaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/operacoes" element={<Transactions />} />
        <Route path="/investimentos" element={<Investments />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
