import { observer } from "mobx-react";
import { ITransactionDetailModel } from "../Models/ClientModels/TransactionDetailModel";

interface IProps {
  transaction: ITransactionDetailModel;
}

export const TransactionsListItem = observer(({ transaction }: IProps) => {
  return (
    <div>
      <div>
        <div>Id:</div>
        <div>{transaction.id}</div>
      </div>
      <div>
        <div>Account:</div>
        <div>{transaction.account?.name}</div>
      </div>
      <div>
        <div>Amount:</div>
        <div>{transaction.amount}</div>
      </div>
      <div>
        <div>Payee:</div>
        <div>{transaction.payee?.name}</div>
      </div>
      <div>
        <div>Category:</div>
        <div>{transaction.category?.name}</div>
      </div>
    </div>
  );
});
