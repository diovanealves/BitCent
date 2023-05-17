import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Pagina";
import { emptyTransaction } from "@/logic/core/finance/Transaction";
import List from "./List";
import Summary from "./Summary";
import Form from "./Form";
import useTransaction from "@/data/hooks/useTransaction";
import NotFound from "../template/NotFound";
import { SegmentedControl } from "@mantine/core";
import { DisplayType } from "@/data/hooks/useTransaction";
import Grid from "./Grid";

export default function Finance() {
  const {
    transactions,
    transaction,
    changeDisplay,
    displayType,
    save,
    remove,
    select,
    cancel,
  } = useTransaction();

  function renderTransaction() {
    return displayType === "List" ? (
      <List transactions={transactions} selectTransaction={select} />
    ) : (
      <Grid transactions={transactions} selectTransaction={select} />
    );
  }

  return (
    <Page>
      <Header />
      <Content className="flex gap-6">
        <Summary transactions={transactions} />
        <div className="flex justify-end gap-5">
          <button
            className="btn bg-blue-500"
            onClick={() => select(emptyTransaction)}
          >
            <IconPlus />
            <span>Nova Transação</span>
          </button>
          <SegmentedControl
            data={[
              { label: <IconList />, value: "List" },
              { label: <IconLayoutGrid />, value: "Grid" },
            ]}
            onChange={(type) => changeDisplay(type as DisplayType)}
          />
        </div>

        {transaction ? (
          <Form
            transaction={transaction}
            cancel={cancel}
            save={save}
            remove={remove}
          />
        ) : transactions.length > 0 ? (
          renderTransaction()
        ) : (
          <NotFound>Nenhuma transação encontrada</NotFound>
        )}
      </Content>
    </Page>
  );
}
