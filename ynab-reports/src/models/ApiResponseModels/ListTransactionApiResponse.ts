import { ITransactionDetailApiModel } from "../ApiModels/TransactionDetailApiModel";

export interface IListTransactionApiResponse {
  transactions: ITransactionDetailApiModel[];
  server_knowledge: number;
}
