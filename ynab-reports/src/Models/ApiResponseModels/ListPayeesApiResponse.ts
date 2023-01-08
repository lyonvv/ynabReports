import { IPayeeApiModel } from "../ApiModels/PayeeApiModel";

export interface IListPayeesApiResponse {
  payees: IPayeeApiModel[];
  serverKnowledge: number;
}
