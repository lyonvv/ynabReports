import { GoalTypeEnumApi } from "./Enums/GoalTypeEnumApi";

export interface ICategoryApiModel {
  id: string;
  category_group_id: string;
  name: string;
  hidden: boolean;
  original_category_group_id: string;
  note: string;
  budgeted: number;
  activity: number;
  balance: number;
  goal_type: GoalTypeEnumApi;
  goal_creation_month: string;
  goal_target: number;
  goal_target_month: string;
  goal_percentage_complete: number;
  goal_months_to_budget: number;
  goal_under_funded: number;
  goal_overall_funded: number;
  goal_overall_left: number;
  deleted: boolean;
}
