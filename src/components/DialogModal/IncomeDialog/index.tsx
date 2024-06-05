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
import { IncomeProps } from "../../../types/Income";

interface IncomeDialogContentProps {
  isOpen: boolean;
  handleClose: () => void;
}

function IncomeDialog({ isOpen, handleClose }: IncomeDialogContentProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IncomeProps>();

  const submitInvestment = (data: IncomeProps) => {
    console.log(data);
  };
  return (
    <DialogModal isOpen={isOpen} handleClose={handleClose}>
      <DialogTitle>Cadastrar Nova Receita</DialogTitle>
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
          <div className="flex justify-start items-center gap-2 mt-2 w-full ">
            <input
              type="checkbox"
              id="isMonthly"
              {...register("isMonthly")}
            />
            <span className="text-xs">É Mensal?</span>
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Cancelar
            </Button>
            <Button type="submit">Cadastrar</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </DialogModal>
  );
}

export default IncomeDialog;
