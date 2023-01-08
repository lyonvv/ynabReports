export interface IScheduledSubTransactionSummaryApiModel {
  id: string;
  scheduled_transaction_id: string;
  amount: number;
  memo: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  deleted: boolean;
}
