import { IPayeeApiModel } from "../Models/ApiModels/PayeeApiModel";
import { IPayeeModel } from "../Models/ClientModels/PayeeModel";

export const payeeApiToClient = (payeeApi: IPayeeApiModel): IPayeeModel => {
  return {
    id: payeeApi.id,
    name: payeeApi.name,
    transferAccountId: payeeApi.transfer_account_id,
    isDeleted: payeeApi.deleted,
  };
};
