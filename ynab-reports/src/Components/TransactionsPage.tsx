import { observer } from "mobx-react";
import { useMountEffect } from "../Hooks/UseMountEffectHook";
import { ITransactionDetailModel } from "../Models/ClientModels/TransactionDetailModel";
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

  const transactionDetails = Array.from(
    rootStore.transactionStore.transactions
  ).reduce((result, [id, transactionSummary]) => {
    const transactionDetail: ITransactionDetailModel = {
      ...transactionSummary,
      account: rootStore.accountStore.accounts.get(
        transactionSummary.accountId
      ),
      payee: rootStore.payeeStore.payees.get(transactionSummary.payeeId),
      category: rootStore.categoryStore.categories.get(
        transactionSummary.categoryId
      ),
      transferAccount: rootStore.accountStore.accounts.get(
        transactionSummary.accountId
      ),
      transferTransaction: rootStore.transactionStore.transactions.get(
        transactionSummary.transferTransactionId ?? ""
      ),
      matchedTransaction: rootStore.transactionStore.transactions.get(
        transactionSummary.matchedTransactionId ?? ""
      ),
    };

    result.set(id, transactionDetail);

    return result;
  }, new Map<string, ITransactionDetailModel>());

  return (
    <div>
      <div>{`${rootStore.transactionStore.transactions.size} transactions loaded`}</div>
      <TransactionsList transactionDetails={transactionDetails} />
    </div>
  );
});
