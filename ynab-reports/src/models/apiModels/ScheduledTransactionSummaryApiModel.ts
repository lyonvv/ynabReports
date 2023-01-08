import { FlagColorEnumApi } from "./Enums/FlagColorEnumApi";
import { FrequencyEnumApi } from "./Enums/FrequencyEnumApi";

export interface IScheduledTransactionSummaryApiModel {
  id: string;
  date_first: string;
  date_next: string;
  frequency: FrequencyEnumApi;
  amount: number;
  memo: string;
  flag_color: FlagColorEnumApi;
  accoutn_id: string;
  payee_id: string;
  category_id: string;
  transfer_account_id: string;
  deleted: boolean;
}
