import { IconPlus } from "@tabler/icons-react";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Pagina";
import { emptyTransaction } from "@/logic/core/finance/Transaction";
import List from "./List";
import Summary from "./Summary";
import Form from "./Form";
import useTransaction from "@/data/hooks/useTransaction";
import NotFound from "../template/NotFound";

export default function Finance() {
  const { transactions, transaction, save, remove, select, cancel } =
    useTransaction();

  return (
    <Page>
      <Header />
      <Content className="flex gap-6">
        <Summary transactions={transactions} />
        <div>
          <button
            className="btn bg-blue-500"
            onClick={() => select(emptyTransaction)}
          >
            <IconPlus />
            <span>Nova Transação</span>
          </button>
        </div>

        {transaction ? (
          <Form
            transaction={transaction}
            cancel={cancel}
            save={save}
            remove={remove}
          />
        ) : transactions.length ? (
          <List transactions={transactions} selectTransaction={select} />
        ) : (
          <NotFound>Nenhuma transação encontrada</NotFound>
        )}
      </Content>
    </Page>
  );
}
