import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const ordersApi = createApi({
  reducerPath: 'order',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://food-delivery-app-backend1.vercel.app/api',
  }),
  tagTypes: ['Order'],
  endpoints: builder => ({
    addOrder: builder.mutation({
      query: values => ({
        url: '/orders',
        method: 'POST',
        data: values,
      }),
      invalidatesTags: ['Order'],
    }),
    getOrderByNumber: builder.query({
      query: number => ({
        url: `/orders`,
        method: 'GET',
        data: number,
      }),
      providesTags: ['Order'],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: 'GET',
      }),
      providesTags: ['Order'],
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetOrderByNumberQuery,
  useGetAllOrdersQuery,
} = ordersApi;

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  reducers: {
    setForm(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearForm(state) {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.address = '';
    },
  },
});

export const { setForm, clearForm } = formSlice.actions;
