import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export const httpClient = (config: AxiosRequestConfig) => {
  const req = {
    method: config.method,
    url: config.url,
    headers: config.headers,
    params: config.params,
    data: config.data,
  };

  return axios(req)
    .then((response: AxiosResponse) => ({ response }))
    .catch((error: AxiosError) => ({ error }));
};

export const get = (config: AxiosRequestConfig) =>
  httpClient({
    ...config,
    method: 'get',
  });

export const post = (config: AxiosRequestConfig) =>
  httpClient({
    ...config,
    method: 'post',
  });

export const put = (config: AxiosRequestConfig) =>
  httpClient({
    ...config,
    method: 'put',
  });
