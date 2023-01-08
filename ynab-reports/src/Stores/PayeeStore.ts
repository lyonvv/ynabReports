import { flow, makeAutoObservable } from "mobx";
import { IListPayeesApiResponse } from "../Models/ApiResponseModels/ListPayeesApiResponse";
import { IPayeeModel } from "../Models/ClientModels/PayeeModel";
import { payeeApiToClient } from "../Transformers/PayeeTransformer";
import { makeGetRequest } from "../Utils/HttpUtils";

export class PayeeStore {
  public constructor() {
    makeAutoObservable(this, {});
  }

  public errorMessage?: any;
  public isLoading: boolean = false;
  public payees: { [id: string]: IPayeeModel } = {};

  public fetchPayeesForBudgetById = flow(function* (
    this: PayeeStore,
    budgetId: string
  ) {
    this.isLoading = true;
    try {
      const response: IListPayeesApiResponse = yield makeGetRequest(
        `budgets/${budgetId}/payees`
      );
      this.payees = response.payees.reduce((result, payeeApi) => {
        result[payeeApi.id] = payeeApiToClient(payeeApi);
        return result;
      }, {} as { [id: string]: IPayeeModel });
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  });
}

export default PayeeStore;
