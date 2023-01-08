import { AccountTypeEnum } from "./Enums/AccountTypeEnum";

export interface IAccountModel {
  id: string;
  name: string;
  onBudget: boolean;
  type: AccountTypeEnum;
  closed: boolean;
  note?: string;
  balance: number;
  clearedBalance: number;
  transferPayeeId: string;
  directImportLinked?: boolean;
  directImportInError?: boolean;
  isDeleted: boolean;
}
