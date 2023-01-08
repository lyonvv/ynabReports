import { flow, makeAutoObservable } from "mobx";
import { IListCategoriesApiResponse } from "../Models/ApiResponseModels/ListCategoriesApiResponse";
import { ICategoryGroupModel } from "../Models/ClientModels/CategoryGroupModel";
import { ICategoryModel } from "../Models/ClientModels/CategoryModel";
import { categoryGroupApiToClient } from "../Transformers/CategoryGroupTransformer";
import { categoryApiToClient } from "../Transformers/CategoryTransformer";
import { makeGetRequest } from "../Utils/HttpUtils";

export class CategoryStore {
  public constructor() {
    makeAutoObservable(this, {});
  }

  public errorMessage?: any;
  public isLoading: boolean = false;
  public categories: Map<string, ICategoryModel> = new Map<
    string,
    ICategoryModel
  >();
  public categoryGroups: Map<string, ICategoryGroupModel> = new Map<
    string,
    ICategoryGroupModel
  >();

  public fetchCategoriesForBudgetById = flow(function* (
    this: CategoryStore,
    budgetId: string
  ) {
    this.isLoading = true;
    try {
      const response: IListCategoriesApiResponse = yield makeGetRequest(
        `budgets/${budgetId}/categories`
      );

      const { categories, categoryGroups } = response.category_groups.reduce(
        (result, categoryGroupWithCategories) => {
          result.categoryGroups.set(
            categoryGroupWithCategories.id,
            categoryGroupApiToClient(categoryGroupWithCategories)
          );

          for (
            let i = 0;
            i < categoryGroupWithCategories.categories.length;
            i++
          ) {
            const categoryApi = categoryGroupWithCategories.categories[i];
            result.categories.set(
              categoryApi.id,
              categoryApiToClient(categoryApi)
            );
          }

          return result;
        },
        {
          categories: new Map<string, ICategoryModel>(),
          categoryGroups: new Map<string, ICategoryGroupModel>(),
        }
      );

      this.categories = categories;
      this.categoryGroups = categoryGroups;
    } catch (error: any) {
      this.errorMessage = error;
    } finally {
      this.isLoading = false;
    }
  });
}

export default CategoryStore;
