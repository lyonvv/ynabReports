import { observer } from "mobx-react";
import { useMountEffect } from "../Hooks/UseMountEffectHook";
import { BudgetStore } from "../Stores/BudgetStore";
import TransactionStore from "../Stores/TransactionStore";

interface IProps {
  budgetStore: BudgetStore;
  transactionStore: TransactionStore;
}

export const TransactionsPage = observer(
  ({ transactionStore, budgetStore }: IProps) => {
    useMountEffect(() => {
      if (!budgetStore.selectedBudget) {
        budgetStore
          .fetchAllBudgets()
          .then(() =>
            transactionStore.fetchTransactionsForBudgetById(
              budgetStore.selectedBudget?.id ?? ""
            )
          );
      } else {
        transactionStore.fetchTransactionsForBudgetById(
          budgetStore.selectedBudget?.id ?? ""
        );
      }
    });

    return (
      <div>{`${transactionStore.transactions.length} transactions loaded`}</div>
    );
  }
);
