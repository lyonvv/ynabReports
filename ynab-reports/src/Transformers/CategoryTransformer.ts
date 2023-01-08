import { ICategoryApiModel } from "../Models/ApiModels/CategoryApiModel";
import { ICategoryModel } from "../Models/ClientModels/CategoryModel";
import { goalTypeEnumApiToClient } from "./EnumTransformers/GoalTypeEnumTransformer";
import dayjs from "dayjs";

export const categoryApiToClient = (
  categoryApi: ICategoryApiModel
): ICategoryModel => {
  return {
    id: categoryApi.id,
    categoryGroupId: categoryApi.category_group_id,
    name: categoryApi.name,
    hidden: categoryApi.hidden,
    originalCategoryGroupId: categoryApi.original_category_group_id,
    note: categoryApi.note,
    budgeted: categoryApi.budgeted,
    activity: categoryApi.activity,
    balance: categoryApi.balance,
    goalType: goalTypeEnumApiToClient(categoryApi.goal_type),
    goalCreationMonth: dayjs(categoryApi.goal_creation_month).toDate(),
    goalTarget: categoryApi.goal_target,
    goalTargetMonth: dayjs(categoryApi.goal_creation_month).toDate(),
    goalPercentageComplete: categoryApi.goal_percentage_complete,
    goalMonthsToBudget: categoryApi.goal_months_to_budget,
    goalUnderFunded: categoryApi.goal_under_funded,
    goalOverallFunded: categoryApi.goal_overall_funded,
    goalOverallLeft: categoryApi.goal_overall_left,
    isDeleted: categoryApi.deleted,
  };
};
