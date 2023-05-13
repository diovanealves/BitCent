import Transaction from "@/logic/core/finance/Transaction";
import DateFormat from "@/logic/utils/Date";
import Money from "@/logic/utils/Money";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

interface ListProps {
  transactions: Transaction[];
}

export default function List(props: ListProps) {
  return (
    <div className="flex flex-col border border-zinc-700 rounded-xl overflow-hidden">
      {props.transactions.map((transaction, index) => (
        <div
          className={`flex gap-3 items-center p-3 ${
            index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"
          }`}
          key={transaction.id}
        >
          <span
            className={`flex justify-center items-center h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full ${
              transaction.type === "receita" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {transaction.type === "receita" ? (
              <IconTrendingUp />
            ) : (
              <IconTrendingDown />
            )}
          </span>
          <span className="w-1/2">{transaction.description}</span>
          <span className="flex-1 ">
            {DateFormat.ddmmyy.format(transaction.date)}
          </span>
          <span>{Money.format(transaction.value)}</span>
        </div>
      ))}
    </div>
  );
}
