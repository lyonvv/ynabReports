import { ITransactionSummaryApiModel } from "../models/ApiModels/TransactionSummaryApiModel";
import { ITransactionSummaryModel } from "../models/ClientModels/TransactionSummaryModel";
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
    deleted: transactionSummaryApi.deleted,
    memo: transactionSummaryApi.memo,
    approved: transactionSummaryApi.approved,
  };
};
