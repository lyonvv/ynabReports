import { GoalTypeEnumApi } from "../../Models/ApiModels/Enums/GoalTypeEnumApi";
import { GoalTypeEnum } from "../../Models/ClientModels/Enums/GoalTypeEnum";

export const goalTypeEnumApiToClient = (
  goalTypeEnumApi: GoalTypeEnumApi
): GoalTypeEnum => {
  switch (goalTypeEnumApi) {
    case GoalTypeEnumApi.DEBT:
      return GoalTypeEnum.Debt;
    case GoalTypeEnumApi.MF:
      return GoalTypeEnum.MonthlyFunding;
    case GoalTypeEnumApi.NEED:
      return GoalTypeEnum.PlanYourFunding;
    case GoalTypeEnumApi.TB:
      return GoalTypeEnum.TargetCategoryBalance;
    case GoalTypeEnumApi.TBD:
      return GoalTypeEnum.TargetCategoryBalanceByDate;
    default:
      return GoalTypeEnum.Unknown;
  }
};
