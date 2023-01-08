import { IAccountApiModel } from "../ApiModels/AccountApiModel";

export interface IListAccountsApiResponse {
  accounts: IAccountApiModel[];
  serverKnowledge: number;
}
