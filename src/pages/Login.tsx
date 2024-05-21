import { Google } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";
import { CreateUser } from "../api/User/CreateUser";
import { user } from "../mock/db/user";

function Login() {
  return (
    <div className="p-10 w-screen h-screen flex ">
      <div className="flex w-full justify-center items-center flex-col ">
        <div className="flex flex-col max-w-[40%] w-full items-center justify-center">
          <button className="p-2 bg-white rounded-md border-2 border-gray-400 w-full flex justify-evenly hover:opacity-70">
            <Google />
            Fazer login com o Gooogle
          </button>
          <Divider />
          <div className="w-full max-w-[400px] mt-4 mb-4 h-[1px] bg-black rounded-full"></div>
          <div className="flex flex-col gap-1 text-sm w-full min-w-[300px]">
            <span>Seu email</span>
            <input
              type="email"
              placeholder="insira seu email"
              className="bg-gray-200 p-2 rounded-md text-black"
            />
          </div>
          <div className="flex flex-col gap-1 text-sm w-full min-w-[300px]">
            <span>Senha</span>
            <input
              type="password"
              placeholder="insira sua senha"
              className="bg-gray-200 p-2 rounded-md text-black"
            />
          </div>
          <div className="flex justify-start items-center gap-2 mt-2 w-full ">
            <input type="checkbox" id="show-password" />
            <span className="text-xs">Mostrar Senha</span>
          </div>
          <div className="mt-4 w-full">
            <button
              className="bg-purple-600 p-4 rounded-full text-white uppercase w-full hover:opacity-70"
              onClick={() => CreateUser(user)}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
