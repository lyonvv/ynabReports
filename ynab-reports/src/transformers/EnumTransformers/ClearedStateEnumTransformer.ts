import { ClearedStateEnumApi } from "../../models/ApiModels/Enums/ClearedStateEnumApi";
import { ClearedStateEnum } from "../../models/ClientModels/Enums/ClearedStateEnum";

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
