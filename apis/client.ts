const nuxtApp = useNuxtApp();

const reqMethods = [
  'request',
  'delete',
  'get',
  'head',
  'options',
  'post',
  'put',
  'patch',
];
/**
 * Creates an object containing functions for making HTTP requests using the provided client.
 * @param reqMethods - An array of HTTP request methods (e.g., 'get', 'post', 'put', 'delete').
 * @param client - The HTTP client used to make requests.
 * @returns An object with functions for each HTTP request method.
 */
const service = reqMethods.reduce((acc: any, method: string) => {
  acc[method] = (url: string, data?: any) => {
    return nuxtApp.$axiosIns[method](url, data);
  };
  return acc;
}, {});

export const resource = (resourceUrl: string) => ({
  get(param = '') {
    return service.get(`${resourceUrl}${param}`);
  },
  show(id: string) {
    return service.get(`${resourceUrl}/${id}`);
  },
  create(data: any) {
    return service.post(resourceUrl, data);
  },
  send(id: string) {
    return service.post(`${resourceUrl}/${id}/send`);
  },
  update(id: string, data: any) {
    if (data instanceof FormData) {
      data.append('_method', 'PATCH');
    } else {
      data['_method'] = 'PATCH';
    }
    return service.post(`${resourceUrl}/${id}`, data);
  },
  replace(data = {}) {
    return service.put(resourceUrl, data);
  },
  remove(id = '') {
    return service.delete(`${resourceUrl}/${id}`);
  },
  removeAll(ids: string[]) {
    return service.delete(`${resourceUrl}/all`, { data: ids });
  },
});
