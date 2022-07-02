import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://gls-food-app.herokuapp.com/api',
  }),
  tagTypes: ['Product'],
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['Product'],
    }),
    getProductById: builder.query({
      query: id => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
