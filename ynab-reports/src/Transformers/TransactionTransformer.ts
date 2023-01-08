import { ITransactionSummaryApiModel } from "../Models/ApiModels/TransactionSummaryApiModel";
import { ITransactionSummaryModel } from "../Models/ClientModels/TransactionSummaryModel";
import { clearedStateEnumApiToClient } from "./EnumTransformers/ClearedStateEnumTransformer";
import dayjs from "dayjs";

export const transactionSummaryApiToClient = (
  transactionSummaryApi: ITransactionSummaryApiModel
): ITransactionSummaryModel => {
  return {
    id: transactionSummaryApi.id,
    amount: transactionSummaryApi.amount,
    cleared: clearedStateEnumApiToClient(transactionSummaryApi.cleared),
    date: dayjs(transactionSummaryApi.date).toDate(),
    isDeleted: transactionSummaryApi.deleted,
    memo: transactionSummaryApi.memo,
    approved: transactionSummaryApi.approved,
    accountId: transactionSummaryApi.account_id,
    payeeId: transactionSummaryApi.payee_id,
    categoryId: transactionSummaryApi.category_id,
    transferAccountId: transactionSummaryApi.transfer_account_id,
    transferTransactionId: transactionSummaryApi.transfer_transaction_id,
    matchedTransactionId: transactionSummaryApi.matched_transaction_id,
    importId: transactionSummaryApi.import_id,
  };
};
