import { AccountTypeApi } from "./Enums/AccountTypeEnumApi";

export interface IAccountApiModel {
  id: string;
  name: string;
  type: AccountTypeApi;
  on_budget: boolean;
  closed: boolean;
  note?: string;
  balance: number;
  cleared_balance: number;
  transfer_payee_id: string;
  direct_import_linked?: boolean;
  direct_import_in_error?: boolean;
  deleted: boolean;
}
