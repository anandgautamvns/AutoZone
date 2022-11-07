import { createSelector } from "reselect";
import { AppState } from "../../rootReducer";
import { ModuleState } from "./type";

export const selectModuleState = (state: AppState) => state.module;

export const selectYearListData = createSelector(
  selectModuleState,
  (item: ModuleState) => item.yearList.data
);
export const selectYearListLoading = createSelector(
  selectModuleState,
  (item: ModuleState) => item.yearList.loading
);

export const selectMakerListData = createSelector(
  selectModuleState,
  (item: ModuleState) => item.makerList.data
);
export const selectMakerListLoading = createSelector(
  selectModuleState,
  (item: ModuleState) => item.makerList.loading
);

export const selectModelListData = createSelector(
  selectModuleState,
  (item: ModuleState) => item.modelList.data
);
export const selectModelListLoading = createSelector(
  selectModuleState,
  (item: ModuleState) => item.modelList.loading
);

export const selectEngineListData = createSelector(
  selectModuleState,
  (item: ModuleState) => item.engineList.data
);
export const selectEngineListLoading = createSelector(
  selectModuleState,
  (item: ModuleState) => item.engineList.loading
);
