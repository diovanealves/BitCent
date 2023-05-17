import Transaction from "@/logic/core/finance/Transaction";
import { TransactionType } from "@/logic/core/finance/TransactionType";
import SummaryItem from "./SummaryItem";
import {
  IconArrowsDoubleSwNe,
  IconCash,
  IconCreditCard,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";

interface SummaryProps {
  transactions: Transaction[];
  className?: string;
}

const total = (total: number, r: Transaction) => total + r.value;

export default function Summary(props: SummaryProps) {
  const Recipes = props.transactions
    .filter((r) => r.type === TransactionType.RECIPE)
    .reduce(total, 0);

  const Expenses = props.transactions
    .filter((r) => r.type === TransactionType.EXPENSE)
    .reduce(total, 0);

  const totalValue = Recipes - Expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SummaryItem
        title="Receitas"
        value={Recipes}
        icon={<IconCash />}
        className="bg-gradient-to-r from-green-700 to-green-500 border-green-500 "
        iconClassName="text-white"
      />
      <SummaryItem
        title="Despesas"
        value={Expenses}
        icon={<IconCreditCard />}
        className="bg-gradient-to-r from-red-700 to-red-500 border-red-500 "
        iconClassName="text-white"
      />
      <SummaryItem
        title="Total"
        value={totalValue}
        className={
          totalValue > 0
            ? "border-green-500"
            : totalValue < 0
            ? "border-red-500"
            : ""
        }
        valueClassName={
          totalValue > 0
            ? "text-green-500"
            : totalValue < 0
            ? "text-red-500"
            : ""
        }
        icon={
          totalValue > 0 ? (
            <IconTrendingUp />
          ) : totalValue < 0 ? (
            <IconTrendingDown />
          ) : (
            <IconArrowsDoubleSwNe />
          )
        }
        iconClassName={
          totalValue > 0
            ? "text-green-500"
            : totalValue < 0
            ? "text-red-500"
            : ""
        }
      />
    </div>
  );
}
