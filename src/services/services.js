import apiRequest from './axios-utils';

const URL = 'http://localhost:4000/gets'

export const getContinents = ( successCallback, errorCallback) => {
  apiRequest({
    url: `${URL}/getContinets`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
    },
    onSuccess: response => { successCallback(response) },
    onError: error => { errorCallback(error) }
  });
}

export const getContinetByID = (id, successCallback, errorCallback) => {
  apiRequest({
    url: `${URL}/getContinetByID?id=${id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
    },
    onSuccess: response => { successCallback(response) },
    onError: error => { errorCallback(error) }
  });
}

export const getCountriesByContinentID = (id, successCallback, errorCallback) => {
  apiRequest({
    url: `${URL}/getCountriesByContinentID?id=${id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
    },
    onSuccess: response => { successCallback(response) },
    onError: error => { errorCallback(error) }
  });
}

export const getCountryByID = (id, successCallback, errorCallback) => {
  apiRequest({
    url: `${URL}/getCountryByID?id=${id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
    },
    onSuccess: response => { successCallback(response) },
    onError: error => { errorCallback(error) }
  });
}
export const getStateByCountryID = (id, successCallback, errorCallback) => {
  apiRequest({
    url: `${URL}/getStateByCountryID?id=${id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
    },
    onSuccess: response => { successCallback(response) },
    onError: error => { errorCallback(error) }
  });
}
export const getStateByID = (id, successCallback, errorCallback) => {
  apiRequest({
    url: `${URL}/getStateByID?id=${id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
    },
    onSuccess: response => { successCallback(response) },
    onError: error => { errorCallback(error) }
  });
}
export const getCitiesByStateID = (id, successCallback, errorCallback) => {
  apiRequest({
    url: `${URL}/getCitiesByStateID?id=${id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
    },
    onSuccess: response => { successCallback(response) },
    onError: error => { errorCallback(error) }
  });
}
export const getCityByID = (id, successCallback, errorCallback) => {
  apiRequest({
    url: `${URL}/getCityByID?id=${id}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
    },
    onSuccess: response => { successCallback(response) },
    onError: error => { errorCallback(error) }
  });
}