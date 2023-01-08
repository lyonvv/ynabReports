import { ICurrencyFormatModel } from "./CurrencyFormatModel";

export interface IBudgetSummaryModel {
  id: string;
  name: string;
  currencyFormat: ICurrencyFormatModel;
  dateFormat: string;
}
