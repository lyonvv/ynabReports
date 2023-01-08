import { ClearedStateEnumApi } from "./Enums/ClearedStateEnumApi";
import { FlagColorEnumApi } from "./Enums/FlagColorEnumApi";

export interface ITransactionSummaryApiModel {
  id: string;
  date: string;
  amount: number;
  memo: string;
  cleared: ClearedStateEnumApi;
  approved: boolean;
  flag_color: FlagColorEnumApi;
  account_id: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  transfer_transaction_id: string;
  matched_transaction_id: string;
  import_id: string;
  deleted: boolean;
}
