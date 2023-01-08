import { observer } from "mobx-react";
import { ITransactionDetailModel } from "../Models/ClientModels/TransactionDetailModel";
import { TransactionsListItem } from "./TransactionListItem";

interface IProps {
  transactionDetails: Map<string, ITransactionDetailModel>;
}

export const TransactionsList = observer(({ transactionDetails }: IProps) => {
  return (
    <div>
      {Array.from(transactionDetails.values()).map((transactionDetail) => (
        <TransactionsListItem transaction={transactionDetail} />
      ))}
    </div>
  );
});
