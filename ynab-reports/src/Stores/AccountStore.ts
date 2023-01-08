import { flow, makeAutoObservable } from "mobx";
import { IListAccountsApiResponse } from "../Models/ApiResponseModels/ListAccountsApiResponse";
import { IAccountModel } from "../Models/ClientModels/AccountModel";
import { accountApiToClient } from "../Transformers/AccountTransformer";
import { makeGetRequest } from "../Utils/HttpUtils";

export class AccountStore {
  public constructor() {
    makeAutoObservable(this, {});
  }

  public errorMessage?: any;
  public isLoading: boolean = false;
  public accounts: Map<string, IAccountModel> = new Map<
    string,
    IAccountModel
  >();

  public fetchAccountsForBudgetById = flow(function* (
    this: AccountStore,
    budgetId: string
  ) {
    this.isLoading = true;
    try {
      const response: IListAccountsApiResponse = yield makeGetRequest(
        `budgets/${budgetId}/accounts`
      );
      this.accounts = response.accounts.reduce((result, accountApi) => {
        result.set(accountApi.id, accountApiToClient(accountApi));
        return result;
      }, new Map<string, IAccountModel>());
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  });
}

export default AccountStore;
