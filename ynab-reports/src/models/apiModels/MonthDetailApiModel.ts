import { ICategoryApiModel } from "./CategoryApiModel";

export interface IMonthDetailApiModel {
  month: string;
  income: number;
  budgeted: number;
  activity: number;
  to_be_budgeted: number;
  age_of_money: number;
  deleted: boolean;
  category: ICategoryApiModel[];
}
