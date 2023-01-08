import { IBudgetSummaryApiModel } from "./BudgetSummaryApiModel";
import { ICategoryApiModel } from "./CategoryApiModel";
import { ICategoryGroupApiModel } from "./CategoryGroupApiModel";
import { IMonthDetailApiModel } from "./MonthDetailApiModel";
import { IPayeeApiModel } from "./PayeeApiModel";
import { IPayeeLocationApiModel } from "./PayeeLocationApiModel";
import { IScheduledSubTransactionSummaryApiModel } from "./ScheduledSubTransactionSummaryApiModel";
import { IScheduledTransactionSummaryApiModel } from "./ScheduledTransactionSummaryApiModel";
import { ISubTransactionApiModel } from "./SubTransactionApiModel";
import { ITransactionSummaryApiModel } from "./TransactionSummaryApiModel";

export interface IBudgetDetailApiModel extends IBudgetSummaryApiModel {
  payees: IPayeeApiModel[];
  payee_locations: IPayeeLocationApiModel[];
  categoryGroups: ICategoryGroupApiModel[];
  categories: ICategoryApiModel[];
  months: IMonthDetailApiModel[];
  transactions: ITransactionSummaryApiModel[];
  subtransactions: ISubTransactionApiModel[];
  scheduled_transactions: IScheduledTransactionSummaryApiModel[];
  scheduled_subtransactions: IScheduledSubTransactionSummaryApiModel[];
}
