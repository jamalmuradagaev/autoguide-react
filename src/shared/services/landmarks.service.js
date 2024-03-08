import { apiInstance } from "./base.service";

export class Landmarks {
  static BASE_URL = "landmarks/";

  static getAll() {
    return apiInstance.get(Landmarks.BASE_URL);
  }

  static getById(params) {
    return apiInstance.get(Landmarks.BASE_URL, { params });
  }
}
