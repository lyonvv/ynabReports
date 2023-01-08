import { ClearedStateEnum } from "./Enums/ClearedStateEnum";

export interface ITransactionSummaryModel {
  id: string;
  date: Date;
  amount: number;
  memo: string;
  cleared: ClearedStateEnum;
  approved: boolean;
  isDeleted: boolean;
  accountId: string;
  payeeId: string;
  categoryId: string;
  transferAccountId: string;
  transferTransactionId: string;
  matchedTransactionId: string;
  importId: string;
}
