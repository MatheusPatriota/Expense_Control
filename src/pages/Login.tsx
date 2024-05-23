import { Google } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import WithAuth from "../routes/WithAuth";

interface InputProps {
  email: string;
  password: string;
  showPassword?: boolean;
}

function Login() {
  const { SignIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = (data: InputProps) =>
    {
      try{
        SignIn(data.email, data.password);
        navigate("/");
      }catch(err){
        console.log(err);
      }
    }

  return (
    <div className="p-10 w-screen h-screen flex ">
      <div className="flex w-full justify-center items-center flex-col ">
        <div className="flex flex-col max-w-[40%] w-full items-center justify-center">
          <button className="p-2 bg-white rounded-md border-2 border-gray-400 w-full flex justify-evenly hover:opacity-70">
            <Google />
            Fazer login com o Google
          </button>
          <Divider />
          <div className="w-full max-w-[400px] mt-4 mb-4 h-[1px] bg-black rounded-full"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1 text-sm w-full min-w-[300px]">
              <span>Seu email</span>
              <input
                type="email"
                placeholder="insira seu email"
                className="bg-gray-200 p-2 rounded-md text-black"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="flex flex-col gap-1 text-sm w-full min-w-[300px]">
              <span>Senha</span>
              <input
                type={watch("showPassword") ? "text" : "password"}
                placeholder="insira sua senha"
                className="bg-gray-200 p-2 rounded-md text-black"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="flex justify-start items-center gap-2 mt-2 w-full ">
              <input type="checkbox" id="show-password" {...register("showPassword")} />
              <span className="text-xs">Mostrar Senha</span>
            </div>
            <div className="mt-4 w-full">
              <button
                className="bg-purple-600 p-4 rounded-full text-white uppercase w-full hover:opacity-70"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WithAuth(Login);
