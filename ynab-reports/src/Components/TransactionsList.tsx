import { observer } from "mobx-react";
import { ITransactionSummaryModel } from "../Models/ClientModels/TransactionSummaryModel";
import { TransactionsListItem } from "./TransactionListItem";

interface IProps {
  transactions: ITransactionSummaryModel[];
}

export const TransactionsList = observer(({ transactions }: IProps) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionsListItem transaction={transaction} />
      ))}
    </div>
  );
});
