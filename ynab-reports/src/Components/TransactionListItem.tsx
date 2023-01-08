import { observer } from "mobx-react";
import { ITransactionDetailModel } from "../Models/ClientModels/TransactionDetailModel";

interface IProps {
  transaction: ITransactionDetailModel;
}

export const TransactionsListItem = observer(({ transaction }: IProps) => {
  return (
    <div>
      <div>{transaction.id}</div>
    </div>
  );
});
