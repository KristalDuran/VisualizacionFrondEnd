import { axiosApiV1 } from './axios-utils';


export default class Service {

  static getCountriesByContinentID(id) {
    return axiosApiV1().get(`getCountriesByContinentID?id=${id}`);
  }

  static getContinetByID(id) {
    return axiosApiV1().get(`getContinetByID?id=${id}`);
  }
}