import React from "react";
import { UserProps } from "../../types/User";

interface AvatarProps {
  userInfo: UserProps;
}
function Avatar({ userInfo }: AvatarProps) {
  return (
    <div className="p-12 rounded-md bg-gray-200 h-[200px] w-fit flex justify-center items-center gap-4">
      <div>
        <img
          src={userInfo.imageURL || ""}
          alt={userInfo.name}
          className="rounded-full h-[150px] w-[150px] object-cover object-center"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{userInfo.name}</span>
        <div>
          Salário: <span className="font-semibold">R${userInfo.netSalary}</span>
        </div>
        <div className="flex flex-col">
          <div>Sistema de Distribuição de Gastos Escolhido</div>
          <div>
            Gastos Fixos:{" "}
            <span className="font-semibold">
              {userInfo.fixedExpensePercentage}%
            </span>
          </div>
          <div>
            Gastos Variáveis:
            <span className="font-semibold">
              {userInfo.percentageSpentVariable}%
            </span>
          </div>
          <div>
            Gastos para Investimento:
            <span className="font-semibold">
              {userInfo.percentageSpentInvestment}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
