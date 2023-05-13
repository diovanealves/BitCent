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
        iconClassName="text-green-500"
      />
      <SummaryItem
        title="Despesas"
        value={Expenses}
        icon={<IconCreditCard />}
        iconClassName="text-red-500"
      />
      <SummaryItem
        title="Total"
        value={totalValue}
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
