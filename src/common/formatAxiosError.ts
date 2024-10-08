export function formatAxiosError(e: any) {
  const { status, data, headers } = e.response || {};
  const isRequestExists = e.request ? true : false;
  const res = { message: e.message, status, data, headers, isRequestExists };
  return res;
}
