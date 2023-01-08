import { IBudgetSummaryApiModel } from "../ApiModels/BudgetSummaryApiModel";

export interface IBudgetSummaryApiResponseModel {
  budgets: IBudgetSummaryApiModel[];
  default_budget: IBudgetSummaryApiModel;
}
