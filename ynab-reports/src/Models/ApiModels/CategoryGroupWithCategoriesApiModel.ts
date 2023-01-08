import { ICategoryApiModel } from "./CategoryApiModel";
import { ICategoryGroupApiModel } from "./CategoryGroupApiModel";

export interface ICategoryGroupWithCategoriesApiModel
  extends ICategoryGroupApiModel {
  categories: ICategoryApiModel[];
}
