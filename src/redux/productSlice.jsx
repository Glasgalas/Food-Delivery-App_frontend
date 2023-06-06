import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://food-delivery-app-backend1.vercel.app/api',
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
