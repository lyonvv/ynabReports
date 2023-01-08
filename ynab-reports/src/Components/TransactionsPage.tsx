import { observer } from "mobx-react";
import { useMountEffect } from "../Hooks/UseMountEffectHook";
import { RootStore } from "../Stores/RootStore";
import { TransactionsList } from "./TransactionsList";

interface IProps {
  rootStore: RootStore;
}

export const TransactionsPage = observer(({ rootStore }: IProps) => {
  const loadAll = () => {
    const budgetId = rootStore.budgetStore.selectedBudget?.id ?? "";

    Promise.all([
      rootStore.transactionStore.fetchTransactionsForBudgetById(budgetId),
      rootStore.categoryStore.fetchCategoriesForBudgetById(budgetId),
      rootStore.payeeStore.fetchPayeesForBudgetById(budgetId),
      rootStore.accountStore.fetchAccountsForBudgetById(budgetId),
    ]);
  };

  useMountEffect(() => {
    if (!rootStore.budgetStore.selectedBudget) {
      rootStore.budgetStore.fetchAllBudgets().then(() => loadAll());
    } else {
      loadAll();
    }
  });

  return (
    <div>
      <div>{`${rootStore.transactionStore.transactions.length} transactions loaded`}</div>
      <TransactionsList
        transactions={rootStore.transactionStore.transactions}
      />
    </div>
  );
});
