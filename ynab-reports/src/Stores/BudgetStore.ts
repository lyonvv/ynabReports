import { flow, makeAutoObservable, observable, action } from "mobx";
import { IBudgetSummaryApiResponseModel } from "../Models/ApiResponseModels/BudgetSummaryApiResponse";
import { IBudgetSummaryModel } from "../Models/ClientModels/BudgetSummaryModel";
import { budgetSummaryApiToClient } from "../Transformers/BudgetSummaryTransformer";
import { makeGetRequest } from "../Utils/HttpUtils";

export class BudgetStore {
  public constructor() {
    makeAutoObservable(this, {
      errorMessage: observable,
      isLoading: observable,
      budgets: observable,
      fetchAllBudgets: action,
    });
  }

  public errorMessage?: any;
  public isLoading: boolean = false;
  public budgets: Map<string, IBudgetSummaryModel> = new Map<
    string,
    IBudgetSummaryModel
  >();
  public selectedBudget?: IBudgetSummaryModel;

  public fetchAllBudgets = flow(function* (this: BudgetStore) {
    this.isLoading = true;
    try {
      const response: IBudgetSummaryApiResponseModel =
        yield makeGetRequest<IBudgetSummaryApiResponseModel>("budgets");
      this.budgets = response.budgets.reduce((result, budgetApi) => {
        result.set(budgetApi.id, budgetSummaryApiToClient(budgetApi));
        return result;
      }, new Map<string, IBudgetSummaryModel>());
      this.selectedBudget = budgetSummaryApiToClient(response.default_budget);
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  });
}
