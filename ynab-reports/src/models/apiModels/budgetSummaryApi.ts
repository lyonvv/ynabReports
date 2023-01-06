import { IDateFormatAPI } from "./dateFormatApi";

export interface IBudgetSummaryApi {
  id: string;
  name: string;
  last_modified_on: string;
  first_month: string;
  last_month: string;
  date_format: IDateFormatAPI;
}
