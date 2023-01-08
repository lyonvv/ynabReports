import { ClearedStateEnumApi } from "../../Models/ApiModels/Enums/ClearedStateEnumApi";
import { ClearedStateEnum } from "../../Models/ClientModels/Enums/ClearedStateEnum";

export const clearedStateEnumApiToClient = (
  clearedStateEnumApi: ClearedStateEnumApi
): ClearedStateEnum => {
  switch (clearedStateEnumApi) {
    case ClearedStateEnumApi.cleared:
      return ClearedStateEnum.Cleared;
    case ClearedStateEnumApi.uncleared:
      return ClearedStateEnum.Uncleared;
    case ClearedStateEnumApi.reconciled:
      return ClearedStateEnum.Reconciled;
    default:
      return ClearedStateEnum.Unknown;
  }
};
