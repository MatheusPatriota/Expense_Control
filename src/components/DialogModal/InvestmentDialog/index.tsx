import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import DialogModal from "..";
import { useForm } from "react-hook-form";
import { Add } from "@mui/icons-material";
import { InvestmentProps } from "../../../types/Investment";

interface InvestmentDialogContentProps {
  isOpen: boolean;
  handleClose: () => void;
}

function InvestmentDialog({ isOpen, handleClose }: InvestmentDialogContentProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InvestmentProps>();

  const submitInvestment = (data: InvestmentProps) => {
    console.log(data);
  };
  return (
    <DialogModal isOpen={isOpen} handleClose={handleClose}>
      <DialogTitle>Cadastrar Novo Investimento</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitInvestment)}>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Descrição</span>
            <input
              type="text"
              id="name"
              className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 text-xs">Nome é Obrigatório</span>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Valor (R$)</span>
            <input
              type="number"
              id="name"
              className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              {...register("value", { required: true })}
            />
            {errors.value && (
              <span className="text-red-500 text-xs">Valor é Obrigatório</span>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Tipo de Investimento</span>
            <div className="flex gap-4">
              <select
                {...register("investmentCategoryId", { required: true })}
                className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              >
                <option value="food">Alimentação</option>
                <option value="fix">Fixo</option>
                <option value="eletivo">Eletivo</option>
              </select>
              <button className="rounded-full p-1 bg-[#6cbd72]  hover:opacity-70 flex justify-center items-center h-[30px] w-[30px]">
                <Add sx={{ color: "#fff" }} fontSize="small" />
              </button>
            </div>
            {errors.investmentCategoryId && (
              <span className="text-red-500 text-xs">
                Tipo de Despesa é Obrigatório
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Data da Aplicação</span>
            <input
              type="date"
              id="name"
              className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              {...register("date", { required: true })}
            />
            {errors.date && (
              <span className="text-red-500 text-xs">
                Data da(o) Compra/Gasto é Obrigatório
              </span>
            )}
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="error">Cancelar</Button>
            <Button type="submit">Cadastrar</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </DialogModal>
  );
}

export default InvestmentDialog;
