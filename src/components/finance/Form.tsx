import Transaction from "@/logic/core/finance/Transaction";
import { TransactionType } from "@/logic/core/finance/TransactionType";
import DateFormat from "@/logic/utils/Date";
import { IconCheck, IconTrash, IconX } from "@tabler/icons-react";
import { useState } from "react";

interface FormProps {
  transaction: Transaction;
  save?: (transaction: Transaction) => void;
  remove?: (transaction: Transaction) => void;
  cancel?: () => void;
}

export default function Form(props: FormProps) {
  const [transaction, setTransaction] = useState<Transaction>(
    props.transaction
  );

  return (
    <div className="flex flex-col border border-zinc-700 rounded-xl overflow-hidden">
      <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
      <div className="flex flex-col gap-4 p-4 sm:p-7">
        <input
          type="text"
          placeholder="Descrição"
          className="input"
          value={transaction.description ?? ""}
          onChange={(e) => {
            setTransaction({
              ...transaction,
              description: e.target.value,
            });
          }}
        />
        <input
          type="number"
          placeholder="Valor"
          className="input"
          value={transaction.value ?? 0}
          onChange={(e) => {
            setTransaction({
              ...transaction,
              value: +e.target.value,
            });
          }}
        />
        <input
          type="date"
          placeholder="Data"
          className="input"
          value={DateFormat.yymmdd.format(transaction.date ?? new Date())}
          onChange={(e) => {
            setTransaction({
              ...transaction,
              date: new Date(`${e.target.value} `),
            });
          }}
        />
        <div className="flex gap-8">
          <div className="flex gap-2">
            <input
              type="radio"
              name="tipo"
              value="receita"
              checked={transaction.type === "receita"}
              onChange={() => {
                setTransaction({
                  ...transaction,
                  type: TransactionType.RECIPE,
                });
              }}
            />
            <span>Receita</span>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              name="tipo"
              value="receita"
              checked={transaction.type === "despesa"}
              onChange={() => {
                setTransaction({
                  ...transaction,
                  type: TransactionType.EXPENSE,
                });
              }}
            />
            <span>Despesa</span>
          </div>
        </div>
      </div>
      <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
        <button
          className="btn bg-green-500"
          onClick={() => props.save?.(transaction)}
        >
          <IconCheck />
          <span className="hidden sm:inline">Salvar</span>
        </button>
        <button
          className="btn bg-zinc-500"
          onClick={() => {
            props.cancel?.();
          }}
        >
          <IconX />
          <span className="hidden sm:inline">Cancelar</span>
        </button>
        <span className="flex-1"></span>
        {props.transaction.id && (
          <button
            className="btn bg-red-500"
            onClick={() => props.remove?.(transaction)}
          >
            <IconTrash />
            <span className="hidden sm:inline">Excluir</span>
          </button>
        )}
      </div>
    </div>
  );
}
