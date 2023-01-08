import { IAccountModel } from "./AccountModel";
import { ICategoryModel } from "./CategoryModel";
import { IPayeeModel } from "./PayeeModel";
import { ITransactionSummaryModel } from "./TransactionSummaryModel";

export interface ITransactionDetailModel extends ITransactionSummaryModel {
  account?: IAccountModel;
  payee?: IPayeeModel;
  category?: ICategoryModel;
  transferAccount?: IAccountModel;
  transferTransaction?: ITransactionSummaryModel;
  matchedTransaction?: ITransactionSummaryModel;
}
