import { flow, makeAutoObservable } from "mobx";
import { IListTransactionApiResponse } from "../Models/ApiResponseModels/ListTransactionApiResponse";
import { ITransactionSummaryModel } from "../Models/ClientModels/TransactionSummaryModel";
import { transactionSummaryApiToClient } from "../Transformers/TransactionTransformer";
import { makeGetRequest } from "../Utils/HttpUtils";

export class TransactionStore {
  public constructor() {
    makeAutoObservable(this, {});
  }

  public errorMessage?: any;
  public isLoading: boolean = false;
  public transactions: Map<string, ITransactionSummaryModel> = new Map<
    string,
    ITransactionSummaryModel
  >();

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
      this.transactions = response.transactions.reduce(
        (result, transactionApi) => {
          result.set(
            transactionApi.id,
            transactionSummaryApiToClient(transactionApi)
          );
          return result;
        },
        new Map<string, ITransactionSummaryModel>()
      );
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  });
}

export default TransactionStore;
