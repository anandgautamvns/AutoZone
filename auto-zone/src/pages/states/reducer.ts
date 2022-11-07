import { ModuleReducerMap } from "../../type";
import { combineModuleReducers } from "../../utils";
import { defaultData } from "./constant";
import {
  ModuleAction,
  ModuleState,
  RequestEngineListFailure,
  RequestEngineListSuccess,
  RequestMakerListFailure,
  RequestMakerListSuccess,
  RequestModelListFailure,
  RequestModelListSuccess,
  RequestYearListFailure,
  RequestYearListSuccess,
  REQUEST_ENGINE_LIST_FAILURE,
  REQUEST_ENGINE_LIST_PENDING,
  REQUEST_ENGINE_LIST_SUCCESS,
  REQUEST_MAKER_LIST_FAILURE,
  REQUEST_MAKER_LIST_PENDING,
  REQUEST_MAKER_LIST_SUCCESS,
  REQUEST_MODEL_LIST_FAILURE,
  REQUEST_MODEL_LIST_PENDING,
  REQUEST_MODEL_LIST_SUCCESS,
  REQUEST_YEAR_LIST_FAILURE,
  REQUEST_YEAR_LIST_PENDING,
  REQUEST_YEAR_LIST_SUCCESS,
} from "./type";

export const initialState: ModuleState = {
  yearList: {
    data: [],
    loading: false,
    error: null,
  },
  makerList: {
    data: defaultData,
    loading: false,
    error: null,
  },
  modelList: {
    data: defaultData,
    loading: false,
    error: null,
  },
  engineList: {
    data: [],
    loading: false,
    error: null,
  },
};

const moduleReducer: ModuleReducerMap<ModuleState, ModuleAction> = {
  [REQUEST_YEAR_LIST_PENDING](state) {
    return { ...state, yearList: { ...state.yearList, loading: true } };
  },
  [REQUEST_YEAR_LIST_SUCCESS](state, action) {
    const dataList = (action as RequestYearListSuccess).payload;
    return {
      ...state,
      yearList: {
        ...state.yearList,
        data: dataList,
        loading: false,
      },
    };
  },
  [REQUEST_YEAR_LIST_FAILURE](state, action) {
    const error = (action as RequestYearListFailure).payload;
    return {
      ...state,
      yearList: { ...state.yearList, loading: false, error },
    };
  },

  [REQUEST_MAKER_LIST_PENDING](state) {
    return { ...state, makerList: { ...state.makerList, loading: true } };
  },
  [REQUEST_MAKER_LIST_SUCCESS](state, action) {
    const dataList = (action as RequestMakerListSuccess).payload;
    return {
      ...state,
      makerList: {
        ...state.makerList,
        data: dataList,
        loading: false,
      },
    };
  },
  [REQUEST_MAKER_LIST_FAILURE](state, action) {
    const error = (action as RequestMakerListFailure).payload;
    return {
      ...state,
      makerList: { ...state.makerList, loading: false, error },
    };
  },

  [REQUEST_MODEL_LIST_PENDING](state) {
    return { ...state, modelList: { ...state.modelList, loading: true } };
  },
  [REQUEST_MODEL_LIST_SUCCESS](state, action) {
    const dataList = (action as RequestModelListSuccess).payload;
    return {
      ...state,
      modelList: {
        ...state.modelList,
        data: dataList,
        loading: false,
      },
    };
  },
  [REQUEST_MODEL_LIST_FAILURE](state, action) {
    const error = (action as RequestModelListFailure).payload;
    return {
      ...state,
      modelList: { ...state.modelList, loading: false, error },
    };
  },

  [REQUEST_ENGINE_LIST_PENDING](state) {
    return { ...state, engineList: { ...state.engineList, loading: true } };
  },
  [REQUEST_ENGINE_LIST_SUCCESS](state, action) {
    const dataList = (action as RequestEngineListSuccess).payload;
    return {
      ...state,
      engineList: {
        ...state.engineList,
        data: dataList,
        loading: false,
      },
    };
  },
  [REQUEST_ENGINE_LIST_FAILURE](state, action) {
    const error = (action as RequestEngineListFailure).payload;
    return {
      ...state,
      engineList: { ...state.engineList, loading: false, error },
    };
  },
};

export default combineModuleReducers<ModuleState, ModuleAction>(
  initialState,
  moduleReducer
);
