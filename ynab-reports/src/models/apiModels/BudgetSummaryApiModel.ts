import { IAccountApiModel as IAccountAPIModel } from "./AccountApiModel";
import { IBudgetSettingApiModel } from "./BudgetSettingApiModel";

export interface IBudgetSummaryApiModel extends IBudgetSettingApiModel {
  id: string;
  name: string;
  last_modified_on: string;
  first_month: string;
  last_month: string;
  accounts: IAccountAPIModel;
}
