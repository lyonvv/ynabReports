import { IAccountApiModel } from "../Models/ApiModels/AccountApiModel";
import { IAccountModel } from "../Models/ClientModels/AccountModel";
import { accountTypeEnumApiToClient } from "./EnumTransformers/AccountTypeEnumTransformer";

export const accountApiToClient = (
  accountApi: IAccountApiModel
): IAccountModel => {
  return {
    id: accountApi.id,
    name: accountApi.name,
    onBudget: accountApi.on_budget,
    type: accountTypeEnumApiToClient(accountApi.type),
    closed: accountApi.closed,
    note: accountApi.note,
    balance: accountApi.balance,
    clearedBalance: accountApi.cleared_balance,
    transferPayeeId: accountApi.transfer_payee_id,
    directImportLinked: accountApi.direct_import_linked,
    directImportInError: accountApi.direct_import_in_error,
    isDeleted: accountApi.deleted,
  };
};
