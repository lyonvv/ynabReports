import { observer } from "mobx-react";
import { ITransactionSummaryModel } from "../Models/ClientModels/TransactionSummaryModel";

interface IProps {
  transaction: ITransactionSummaryModel;
}

export const TransactionsListItem = observer(({ transaction }: IProps) => {
  return (
    <div>
      <div>{transaction.id}</div>
    </div>
  );
});
