import { useCallback, useContext, useEffect, useState } from "react";
import Transaction from "@/logic/core/finance/Transaction";
import Id from "@/logic/core/comum/Id";
import services from "@/logic/core";
import AuthenticationContext from "../context/AuthenticationContext";

export type DisplayType = "List" | "Grid";

export default function useTransaction() {
  const { user } = useContext(AuthenticationContext);
  const [displayType, setDisplayType] = useState<DisplayType>("List");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const searchTransactions = useCallback(
    async function () {
      if (!user) return;
      const queryingTransactions = await services.finances.consult(user);
      setTransactions(queryingTransactions);
    },
    [user]
  );

  useEffect(() => {
    searchTransactions();
  }, [searchTransactions]);

  async function save(transaction: Transaction) {
    if (!user) return;
    const other = transactions.filter((t) => t.id != transaction.id);
    setTransactions([
      ...other,
      { ...transaction, id: transaction.id ?? Id.new() },
    ]);

    services.finances.save(transaction, user);
    setTransaction(null);
    await searchTransactions();
  }

  async function remove(transaction: Transaction) {
    if (!user) return;
    await services.finances.delete(transaction, user);
    setTransaction(null);
    await searchTransactions();
  }

  function select(transaction: Transaction) {
    setTransaction(transaction);
  }

  function cancel() {
    setTransaction(null);
  }

  return {
    transactions,
    transaction,
    displayType,
    save,
    remove,
    select,
    cancel,
    changeDisplay: setDisplayType,
  };
}
