import Axios from "axios";
import { EngineRequest, MakerRequest, ModelRequest } from "./request";

const ROOT_URL = "https://vpic.nhtsa.dot.gov/api";
const format = "json";

export const getYears = async () => {
  let response;
  try {
    let response;
    response = await Axios.get(
      `${ROOT_URL}`,
      {
        params: { format: format },
      }
    );
  } catch (err) {}
  return response;
};

export const getMakers = async (request: MakerRequest) => {
  let response;
  try {
    response = await Axios.get(
      `${ROOT_URL}/vehicles/GetMakesForManufacturerAndYear/mer`,
      {
        params: { year: request.year, format: format },
      }
    );
  } catch (err) {}
  return response?.data;
};

export const getModels = async (request: ModelRequest) => {
  let response;
  try {
    response = await Axios.get(
      `${ROOT_URL}/vehicles/GetModelsForMakeIdYear/makeId/${request.id}/modelyear/${request.year}`,
      {
        params: { format: format },
      }
    );
  } catch (err) {}
  return response?.data;
};

export const getEngines = async (request: EngineRequest) => {
  let response;
  try {
    let response;
    response = await Axios.get(
      `${ROOT_URL}`,
      {
        params: { format: format },
      }
    );
  } catch (err) {}
  return response;
};

export const APIService = {
  getYears,
  getMakers,
  getModels,
  getEngines
};
