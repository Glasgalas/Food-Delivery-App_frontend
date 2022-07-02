import axios from 'axios';

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const response = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      const res = response.data.data.result;
      return { data: res };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response.status,
          data: err.response.data || err.message,
        },
      };
    }
  };
