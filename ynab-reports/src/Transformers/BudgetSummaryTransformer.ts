import { IBudgetSummaryApiModel } from "../Models/ApiModels/BudgetSummaryApiModel";
import { IBudgetSummaryModel } from "../Models/ClientModels/BudgetSummaryModel";
import { currencyFormatApiToClient } from "./CurrencyFormatTransformer";

export const budgetSummaryApiToClient = (
  budgetSummaryApi: IBudgetSummaryApiModel
): IBudgetSummaryModel => {
  console.log(JSON.stringify(budgetSummaryApi));
  return {
    id: budgetSummaryApi.id,
    name: budgetSummaryApi.name,
    currencyFormat: currencyFormatApiToClient(budgetSummaryApi.currency_format),
    dateFormat: budgetSummaryApi.date_format.format,
  };
};
