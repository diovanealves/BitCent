import { useState } from "react";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Pagina";
import Transaction from "@/logic/core/finance/Transaction";
import FakeTransactions from "@/data/constants/FakeTransactions";
import List from "./List";
import Summary from "./Summary";

export default function Finance() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(FakeTransactions);

  return (
    <Page>
      <Header />
      <Content>
        <Summary transactions={transactions} />
        <List transactions={transactions} />
      </Content>
    </Page>
  );
}
