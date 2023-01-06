import { flow, makeAutoObservable } from "mobx";

export class BudgetStore {
  public constructor() {
    makeAutoObservable(this, {});
  }

  errorMessage?: any;
  isLoading: boolean = false;
  user?: any;

  fetchAllBudgets = flow(function* (this: BudgetStore) {
    this.isLoading = true;
    // try {
    //   const response: IUser = yield makeGetRequest<IUser>("user");
    //   this.user = response;
    // } catch (error: any) {
    //   this.errorMessage = error;
    // } finally {
    //   this.isLoading = false;
    // }
  });
}
