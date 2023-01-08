import { ICurrencyFormatAPIModel } from "./CurrencyFormatApiModel";
import { IDateFormatApiModel } from "./DateFormatApiModel";

export interface IBudgetSettingApiModel {
  date_format: IDateFormatApiModel;
  currency_format: ICurrencyFormatAPIModel;
}
