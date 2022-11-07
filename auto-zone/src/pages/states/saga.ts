import { call, put, takeLatest } from "redux-saga/effects";
import { APIService } from "../../APIService";
import {
  EngineResponse,
  MakerResponse,
  ModelResponse,
  YearResponse,
} from "../../APIService/response";
import {
  requestYearListSuccess,
  requestYearListFailure,
  requestMakerListFailure,
  requestMakerListSuccess,
  requestModelListFailure,
  requestModelListSuccess,
  requestEngineListFailure,
  requestEngineListSuccess,
} from "./action";
import {
  RequestEngineListPending,
  RequestMakerListPending,
  RequestModelListPending,
  REQUEST_ENGINE_LIST_PENDING,
  REQUEST_MAKER_LIST_PENDING,
  REQUEST_MODEL_LIST_PENDING,
  REQUEST_YEAR_LIST_PENDING,
} from "./type";

export function* requestYearList() {
  try {
    const response: YearResponse = yield call(APIService.getYears);
    yield put(requestYearListSuccess(response));
  } catch (error: any) {
    yield put(requestYearListFailure(error));
  }
}

export function* requestMakerList(action: RequestMakerListPending) {
  try {
    const response: MakerResponse = yield call(
      APIService.getMakers,
      action.payload
    );
    yield put(requestMakerListSuccess(response));
  } catch (error: any) {
    yield put(requestMakerListFailure(error));
  }
}

export function* requestModelList(action: RequestModelListPending) {
  try {
    const response: ModelResponse = yield call(
      APIService.getModels,
      action.payload
    );
    yield put(requestModelListSuccess(response));
  } catch (error: any) {
    yield put(requestModelListFailure(error));
  }
}

export function* requestEngineList(action: RequestEngineListPending) {
  try {
    const response: EngineResponse = yield call(
      APIService.getEngines,
      action.payload
    );
    yield put(requestEngineListSuccess(response));
  } catch (error: any) {
    yield put(requestEngineListFailure(error));
  }
}

export function* moduleSaga() {
  yield takeLatest(REQUEST_YEAR_LIST_PENDING, requestYearList);
  yield takeLatest(REQUEST_MAKER_LIST_PENDING, requestMakerList);
  yield takeLatest(REQUEST_MODEL_LIST_PENDING, requestModelList);
  yield takeLatest(REQUEST_ENGINE_LIST_PENDING, requestEngineList);
}

export default moduleSaga;
