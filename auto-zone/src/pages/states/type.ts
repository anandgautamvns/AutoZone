import { Action } from "redux";
import { MakerRequest, ModelRequest } from "../../APIService/request";
import {
  MakerResponse,
  ModelResponse,
  YearResponse,
} from "../../APIService/response";
import { APIError, ReduxAction } from "../../type";

export const REQUEST_YEAR_LIST_PENDING = `REQUEST_YEAR_LIST_PENDING`;
export const REQUEST_YEAR_LIST_SUCCESS = `REQUEST_YEAR_LIST_SUCCESS`;
export const REQUEST_YEAR_LIST_FAILURE = `REQUEST_YEAR_LIST_FAILURE`;

export const REQUEST_MAKER_LIST_PENDING = `REQUEST_MAKER_LIST_PENDING`;
export const REQUEST_MAKER_LIST_SUCCESS = `REQUEST_MAKER_LIST_SUCCESS`;
export const REQUEST_MAKER_LIST_FAILURE = `REQUEST_MAKER_LIST_FAILURE`;

export const REQUEST_MODEL_LIST_PENDING = `REQUEST_MODEL_LIST_PENDING`;
export const REQUEST_MODEL_LIST_SUCCESS = `REQUEST_MODEL_LIST_SUCCESS`;
export const REQUEST_MODEL_LIST_FAILURE = `REQUEST_MODEL_LIST_FAILURE`;

export const REQUEST_ENGINE_LIST_PENDING = `REQUEST_ENGINE_LIST_PENDING`;
export const REQUEST_ENGINE_LIST_SUCCESS = `REQUEST_ENGINE_LIST_SUCCESS`;
export const REQUEST_ENGINE_LIST_FAILURE = `REQUEST_ENGINE_LIST_FAILURE`;

export type RequestYearListPending = Action<typeof REQUEST_YEAR_LIST_PENDING>;
export type RequestYearListSuccess = ReduxAction<
  YearResponse,
  typeof REQUEST_YEAR_LIST_SUCCESS
>;
export type RequestYearListFailure = ReduxAction<
  APIError | null,
  typeof REQUEST_YEAR_LIST_FAILURE
>;

export type RequestMakerListPending = ReduxAction<
  MakerRequest,
  typeof REQUEST_MAKER_LIST_PENDING
>;
export type RequestMakerListSuccess = ReduxAction<
  MakerResponse,
  typeof REQUEST_MAKER_LIST_SUCCESS
>;
export type RequestMakerListFailure = ReduxAction<
  APIError | null,
  typeof REQUEST_MAKER_LIST_FAILURE
>;

export type RequestModelListPending = ReduxAction<
  ModelRequest,
  typeof REQUEST_MODEL_LIST_PENDING
>;
export type RequestModelListSuccess = ReduxAction<
  ModelResponse,
  typeof REQUEST_MODEL_LIST_SUCCESS
>;
export type RequestModelListFailure = ReduxAction<
  APIError | null,
  typeof REQUEST_MODEL_LIST_FAILURE
>;

export type ModuleAction =
  | RequestYearListPending
  | RequestYearListSuccess
  | RequestYearListFailure
  | RequestMakerListPending
  | RequestMakerListSuccess
  | RequestMakerListFailure
  | RequestModelListPending
  | RequestModelListSuccess
  | RequestModelListFailure;

export type ModuleState = {
  yearList: {
    data: YearResponse;
    loading: boolean;
    error: APIError | null;
  };
  makerList: {
    data: MakerResponse;
    loading: boolean;
    error: APIError | null;
  };
  modelList: {
    data: ModelResponse;
    loading: boolean;
    error: APIError | null;
  };
};

export interface YearEntity {
  year: string;
  yearId: string;
}

export interface MakerEntity {
  MakeId: number;
  MakeName: string;
  MfrId: number;
  MfrName: string;
}

export interface ModelEntity {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface EngineEntity {
  count: string;
  engine: string;
  engineId: string;
}
