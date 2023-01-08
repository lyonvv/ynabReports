import { ClearedStateEnum } from "./Enums/ClearedStateEnum";

export interface ITransactionSummaryModel {
  id: string;
  date: Date;
  amount: number;
  memo: string;
  cleared: ClearedStateEnum;
  approved: boolean;
  deleted: boolean;
}
