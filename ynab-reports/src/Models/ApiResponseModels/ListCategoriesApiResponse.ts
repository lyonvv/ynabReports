import { ICategoryGroupWithCategoriesApiModel } from "../ApiModels/CategoryGroupWithCategoriesApiModel";

export interface IListCategoriesApiResponse {
  category_groups: ICategoryGroupWithCategoriesApiModel[];
  server_knowledge: number;
}
