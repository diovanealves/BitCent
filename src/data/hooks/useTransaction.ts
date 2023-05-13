import { useEffect, useState } from "react";
import Transaction from "@/logic/core/finance/Transaction";
import FakeTransactions from "../constants/FakeTransactions";
import Id from "@/logic/core/comum/Id";

export default function useTransaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(searchTransactions, []);

  function searchTransactions() {
    setTransactions(FakeTransactions);
  }

  function save(transaction: Transaction) {
    const other = transactions.filter((t) => t.id != transaction.id);
    setTransactions([
      ...other,
      { ...transaction, id: transaction.id ?? Id.new() },
    ]);
    setTransaction(null);
  }

  function remove(transaction: Transaction) {
    const other = transactions.filter((t) => t.id != transaction.id);
    setTransactions([...other]);
    setTransaction(null);
  }

  function select(transaction: Transaction) {
    setTransaction(transaction);
  }

  function cancel() {
    setTransaction(null);
  }

  return { transactions, transaction, save, remove, select, cancel };
}
