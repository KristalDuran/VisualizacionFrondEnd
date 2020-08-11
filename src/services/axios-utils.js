/**
 * Filename: axios-utils.js
 * Author: rmejias@akurey.com
 * Date: 02/19/2019
 * Description: Axios utils
 */

import axios from 'axios';

/**
 * Contains the axios requests made for possible cancellation
 */
export const axiosRequests = [];
const URL = 'localhost:4000/gets/';
/**
 * Exports an axios instance for api/v1
 */
export const axiosApiV1 = (handleCancellationToken = false) => {
  const axiosInstance = axios.create({
    baseURL: URL,
  });
  if (handleCancellationToken) {
    const axiosToken = axios.CancelToken.source();
    axiosRequests.push(axiosToken);
    axiosInstance.CancelToken = axiosToken;
    axiosInstance.isCancel = axios.isCancel;
    const axiosCancelTokenInstance = {
      post: (route, data, config) => axiosInstance.post(route, data, { cancelToken: axiosInstance.CancelToken.token, ...config }).catch(axiosCatchHandler),
      put: (route, data, config) => axiosInstance.put(route, data, { cancelToken: axiosInstance.CancelToken.token, ...config }).catch(axiosCatchHandler),
      get: (route, config) => axiosInstance.get(route, { cancelToken: axiosInstance.CancelToken.token, ...config }).catch(axiosCatchHandler)
    }
    return axiosCancelTokenInstance;
  }
  return axiosInstance;
};

/**
 * Cancels the pending axios requests
 */
export const cancelAxiosRequests = () => {
  while (axiosRequests.length > 0) {
    axiosRequests[0].cancel('Request canceled.');
    axiosRequests.shift();
  }
}
