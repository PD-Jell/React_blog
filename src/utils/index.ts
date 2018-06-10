export * from './prefix'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

export const doFetch = (url: string, method: HttpMethod, data?: any) => {

  const headers: Headers = new Headers();

  if (method === HttpMethod.POST && data)
    headers.append('Content-Type', 'application/json');

  const requestOption: RequestInit = {
    method: method,
    mode: 'cors',
    headers: headers
  };
  if (method === HttpMethod.POST && data)
    requestOption.body = JSON.stringify(data);

  return fetch(url, requestOption);
};
