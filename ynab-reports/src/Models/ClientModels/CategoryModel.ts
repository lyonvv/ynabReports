import { GoalTypeEnum } from "./Enums/GoalTypeEnum";

export interface ICategoryModel {
  id: string;
  categoryGroupId: string;
  name: string;
  hidden: boolean;
  originalCategoryGroupId: string;
  note: string;
  budgeted: number;
  activity: number;
  balance: number;
  goalType: GoalTypeEnum;
  goalCreationMonth: Date;
  goalTarget: number;
  goalTargetMonth: Date;
  goalPercentageComplete: number;
  goalMonthsToBudget: number;
  goalUnderFunded: number;
  goalOverallFunded: number;
  goalOverallLeft: number;
  isDeleted: boolean;
}
