import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import DialogModal from "..";
import { ExpenseProps } from "../../../types/Expense";
import { useForm } from "react-hook-form";
import { Add } from "@mui/icons-material";

interface ExpenseDialogContentProps {
  isOpen: boolean;
  handleClose: () => void;
}

function ExpenseDialog({ isOpen, handleClose }: ExpenseDialogContentProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ExpenseProps>();

  const submitExpense = (data: ExpenseProps) => {
    console.log(data);
  };
  return (
    <DialogModal isOpen={isOpen} handleClose={handleClose}>
      <DialogTitle>Cadastrar Nova Despesa</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitExpense)}>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Nome</span>
            <input
              type="text"
              id="name"
              className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">Nome é Obrigatório</span>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Descrição</span>
            <input
              type="text"
              id="description"
              className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 text-xs">
                Descrição é Obrigatório
              </span>
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
            <span className="text-sm">Tipo de Despesa</span>
            <div className="flex gap-4">
              <select
                {...register("expenseType", { required: true })}
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
            {errors.expenseType && (
              <span className="text-red-500 text-xs">
                Tipo de Despesa é Obrigatório
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Método de Pagamento</span>
            <div className="flex gap-4">
              <select
                {...register("paymentMethod", { required: true })}
                className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              >
                <option value="pix">Pix</option>
                <option value="money">Dinheiro</option>
                <option value="credit-card">Cartão de Crédito</option>
              </select>
              <button className="rounded-full p-1 bg-[#6cbd72]  hover:opacity-70 flex justify-center items-center h-[30px] w-[30px]">
                <Add sx={{ color: "#fff" }} fontSize="small" />
              </button>
            </div>
            {errors.paymentMethod && (
              <span className="text-red-500 text-xs">
                Método de Pagamento é Obrigatório
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Loja de Compra</span>
            <div className="flex gap-4">
              <select
                {...register("placeOfPurchase")}
                className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              >
                <option value="mercado-livre">MercadoLivre</option>
                <option value="loja-fisica">loja física</option>
                <option value="udemy">Udemy</option>
              </select>
              <button className="rounded-full p-1 bg-[#6cbd72]  hover:opacity-70 flex justify-center items-center h-[30px] w-[30px]">
                <Add sx={{ color: "#fff" }} fontSize="small" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-sm">Data da(o) Compra/Gasto</span>
            <input
              type="date"
              id="name"
              className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
              {...register("buyingDate", { required: true })}
            />
            {errors.buyingDate && (
              <span className="text-red-500 text-xs">
                Data da(o) Compra/Gasto é Obrigatório
              </span>
            )}
          </div>
          <div className="flex justify-start items-center gap-2 mt-2 w-full ">
            <input
              type="checkbox"
              id="isRecurrent"
              {...register("isRecurrent")}
            />
            <span className="text-xs">É recorrente?</span>
          </div>
          {watch("paymentMethod") === "credit-card" && (
            <div className="flex justify-start items-center gap-2 mt-2 w-full ">
              <input
                type="checkbox"
                id="isInstallments"
                {...register("isInstallments")}
              />
              <span className="text-xs">É parcelado?</span>
            </div>
          )}
          {watch("isInstallments") && !watch("isRecurrent") && (
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-sm">Número de Parcelas</span>
              <input
                type="number"
                id="totalInstallments"
                className="border-2 rounded-md border-gray-400 p-1 w-[400px]"
                {...register("totalInstallments")}
              />
              {errors.totalInstallments && (
                <span className="text-red-500 text-xs">
                  Número de Parcelas é Obrigatório
                </span>
              )}
            </div>
          )}
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button type="submit">Agree</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </DialogModal>
  );
}

export default ExpenseDialog;
