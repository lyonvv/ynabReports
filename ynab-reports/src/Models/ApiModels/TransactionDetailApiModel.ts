import { ISubTransactionApiModel } from "./SubTransactionApiModel";
import { ITransactionSummaryApiModel } from "./TransactionSummaryApiModel";

export interface ITransactionDetailApiModel
  extends ITransactionSummaryApiModel {
  account_name: string;
  payee_name: string;
  category_name: string;
  subtransactions: ISubTransactionApiModel[];
}
