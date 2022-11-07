import {
  EngineEntity,
  MakerEntity,
  ModelEntity,
  YearEntity,
} from "../pages/states/type";

export interface PageableResponse<T> {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: T[];
}

export type YearResponse = YearEntity[];
export type MakerResponse = PageableResponse<MakerEntity>;
export type ModelResponse = PageableResponse<ModelEntity>;
export type EngineResponse = EngineEntity[];
