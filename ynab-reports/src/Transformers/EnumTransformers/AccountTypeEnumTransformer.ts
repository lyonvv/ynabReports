import { AccountTypeEnumApi } from "../../Models/ApiModels/Enums/AccountTypeEnumApi";
import { AccountTypeEnum } from "../../Models/ClientModels/Enums/AccountTypeEnum";

export const accountTypeEnumApiToClient = (
  accountTypeEnumApi: AccountTypeEnumApi
): AccountTypeEnum => {
  switch (accountTypeEnumApi) {
    case AccountTypeEnumApi.autoLoan:
      return AccountTypeEnum.AutoLoan;
    case AccountTypeEnumApi.cash:
      return AccountTypeEnum.Cash;
    case AccountTypeEnumApi.checking:
      return AccountTypeEnum.Checking;
    case AccountTypeEnumApi.creditCard:
      return AccountTypeEnum.CreditCard;
    case AccountTypeEnumApi.lineOfCredit:
      return AccountTypeEnum.LineOfCredit;
    case AccountTypeEnumApi.medicalDebt:
      return AccountTypeEnum.MedicalDebt;
    case AccountTypeEnumApi.mortgage:
      return AccountTypeEnum.Mortgage;
    case AccountTypeEnumApi.otherAsset:
      return AccountTypeEnum.OtherAsset;
    case AccountTypeEnumApi.otherDebt:
      return AccountTypeEnum.OtherDebt;
    case AccountTypeEnumApi.otherLiability:
      return AccountTypeEnum.OtherLiability;
    case AccountTypeEnumApi.personalLoan:
      return AccountTypeEnum.PersonalLoan;
    case AccountTypeEnumApi.savings:
      return AccountTypeEnum.Savings;
    case AccountTypeEnumApi.studentLoan:
      return AccountTypeEnum.StudentLoan;

    default:
      return AccountTypeEnum.Unknown;
  }
};
