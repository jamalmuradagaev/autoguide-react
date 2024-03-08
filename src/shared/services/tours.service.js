import { apiInstance } from './base.service';

export class ToursService {
  static BASE_URL = 'tours/';

  static getAll() {
    return apiInstance.get(ToursService.BASE_URL);
  }

  static getById(params) {
    return apiInstance.get(ToursService.BASE_URL, { params });
  }
}
