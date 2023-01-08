import { flow, makeAutoObservable } from "mobx";
import { IListTransactionApiResponse } from "../models/ApiResponseModels/ListTransactionApiResponse";
import { ITransactionSummaryModel } from "../models/ClientModels/TransactionSummaryModel";
import { transactionSummaryApiToClient } from "../Transformers/TransactionTranformer";
import { makeGetRequest } from "../Utils/HttpUtils";

export class TransactionStore {
  public constructor() {
    makeAutoObservable(this, {});
  }

  public errorMessage?: any;
  public isLoading: boolean = false;
  public transactions: ITransactionSummaryModel[] = [];

  public fetchTransactionsForBudgetById = flow(function* (
    this: TransactionStore,
    budgetId: string
  ) {
    this.isLoading = true;
    try {
      const response: IListTransactionApiResponse =
        yield makeGetRequest<IListTransactionApiResponse>(
          `budgets/${budgetId}/transactions`
        );
      this.transactions = response.transactions.map((transactionApi) =>
        transactionSummaryApiToClient(transactionApi)
      );
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  });
}

export default TransactionStore;