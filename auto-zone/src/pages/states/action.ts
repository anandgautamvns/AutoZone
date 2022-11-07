import { EngineRequest, MakerRequest, ModelRequest } from "../../APIService/request";
import {
  EngineResponse,
  MakerResponse,
  ModelResponse,
  YearResponse,
} from "../../APIService/response";
import { APIError } from "../../type";
import {
  RequestYearListPending,
  REQUEST_YEAR_LIST_PENDING,
  RequestYearListSuccess,
  REQUEST_YEAR_LIST_SUCCESS,
  RequestYearListFailure,
  REQUEST_YEAR_LIST_FAILURE,
  RequestMakerListFailure,
  RequestMakerListPending,
  RequestMakerListSuccess,
  REQUEST_MAKER_LIST_FAILURE,
  REQUEST_MAKER_LIST_PENDING,
  REQUEST_MAKER_LIST_SUCCESS,
  RequestModelListFailure,
  RequestModelListPending,
  RequestModelListSuccess,
  REQUEST_MODEL_LIST_FAILURE,
  REQUEST_MODEL_LIST_PENDING,
  REQUEST_MODEL_LIST_SUCCESS,
  RequestEngineListFailure,
  RequestEngineListPending,
  RequestEngineListSuccess,
  REQUEST_ENGINE_LIST_FAILURE,
  REQUEST_ENGINE_LIST_PENDING,
  REQUEST_ENGINE_LIST_SUCCESS,
} from "./type";

export const requestYearListPending = (): Promise<RequestYearListPending> =>
  Promise.resolve({
    type: REQUEST_YEAR_LIST_PENDING,
  });

export const requestYearListSuccess = (
  payload: YearResponse
): RequestYearListSuccess => ({
  type: REQUEST_YEAR_LIST_SUCCESS,
  payload,
});

export const requestYearListFailure = (
  error: APIError | null
): RequestYearListFailure => ({
  type: REQUEST_YEAR_LIST_FAILURE,
  payload: error,
});

export const requestMakerListPending = (
  payload: MakerRequest
): Promise<RequestMakerListPending> =>
  Promise.resolve({
    type: REQUEST_MAKER_LIST_PENDING,
    payload,
  });

export const requestMakerListSuccess = (
  payload: MakerResponse
): RequestMakerListSuccess => ({
  type: REQUEST_MAKER_LIST_SUCCESS,
  payload,
});

export const requestMakerListFailure = (
  error: APIError | null
): RequestMakerListFailure => ({
  type: REQUEST_MAKER_LIST_FAILURE,
  payload: error,
});

export const requestModelListPending = (
  payload: ModelRequest
): Promise<RequestModelListPending> =>
  Promise.resolve({
    type: REQUEST_MODEL_LIST_PENDING,
    payload,
  });
export const requestModelListSuccess = (
  payload: ModelResponse
): RequestModelListSuccess => ({
  type: REQUEST_MODEL_LIST_SUCCESS,
  payload,
});
export const requestModelListFailure = (
  error: APIError | null
): RequestModelListFailure => ({
  type: REQUEST_MODEL_LIST_FAILURE,
  payload: error,
});

export const requestEngineListPending = (
  payload: EngineRequest
): Promise<RequestEngineListPending> =>
  Promise.resolve({
    type: REQUEST_ENGINE_LIST_PENDING,
    payload,
  });
export const requestEngineListSuccess = (
  payload: EngineResponse
): RequestEngineListSuccess => ({
  type: REQUEST_ENGINE_LIST_SUCCESS,
  payload,
});
export const requestEngineListFailure = (
  error: APIError | null
): RequestEngineListFailure => ({
  type: REQUEST_ENGINE_LIST_FAILURE,
  payload: error,
});
