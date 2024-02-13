import React from "react";
import { FcSalesPerformance } from "react-icons/fc";

function Logo() {
  return (
    <div
      className="flex flex-row gap-4 items-center justify-center p-6"
    >
      <FcSalesPerformance size={64} />
      <span className="text-md font-bold">Controle de Finanças</span>
    </div>
  );
}

export default Logo;
