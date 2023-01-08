import { ICategoryGroupApiModel } from "../Models/ApiModels/CategoryGroupApiModel";
import { ICategoryGroupModel } from "../Models/ClientModels/CategoryGroupModel";

export const categoryGroupApiToClient = (
  categoryGroupApi: ICategoryGroupApiModel
): ICategoryGroupModel => {
  return {
    id: categoryGroupApi.id,
    name: categoryGroupApi.name,
    isHidden: categoryGroupApi.hidden,
    isDeleted: categoryGroupApi.deleted,
  };
};
