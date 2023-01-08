import AuthStore from "./AuthStore";
import { BudgetStore } from "./BudgetStore";
import TransactionStore from "./TransactionStore";
import { UserStore } from "./UserStore";

export class RootStore {
  public authStore: AuthStore;
  public userStore: UserStore;
  public budgetStore: BudgetStore;
  public transactionStore: TransactionStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore();
    this.budgetStore = new BudgetStore();
    this.transactionStore = new TransactionStore();
  }
}
