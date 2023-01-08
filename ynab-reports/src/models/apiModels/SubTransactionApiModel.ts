export interface ISubTransactionApiModel {
  id: string;
  transaction_id: string;
  amount: number;
  memo: string;
  payee_id: string;
  payee_name: string;
  category_id: string;
  category_name: string;
  transfer_account_id: string;
  transfer_transaction_id: string;
  deleted: boolean;
}
