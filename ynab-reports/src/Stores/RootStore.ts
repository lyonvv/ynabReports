import AccountStore from "./AccountStore";
import AuthStore from "./AuthStore";
import { BudgetStore } from "./BudgetStore";
import CategoryStore from "./CategoryStore";
import PayeeStore from "./PayeeStore";
import TransactionStore from "./TransactionStore";
import { UserStore } from "./UserStore";

export class RootStore {
  public authStore: AuthStore;
  public userStore: UserStore;
  public budgetStore: BudgetStore;
  public transactionStore: TransactionStore;
  public accountStore: AccountStore;
  public categoryStore: CategoryStore;
  public payeeStore: PayeeStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore();
    this.budgetStore = new BudgetStore();
    this.transactionStore = new TransactionStore();
    this.accountStore = new AccountStore();
    this.categoryStore = new CategoryStore();
    this.payeeStore = new PayeeStore();
  }
}
