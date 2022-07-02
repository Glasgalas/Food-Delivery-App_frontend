import React from 'react';
import SideBar from '../components/SideBar';
import ProductList from '../components/ProductList';
import { Outlet } from 'react-router-dom';
import { useGetAllProductsQuery } from '../redux/productSlice';
import { Grid, GridItem, Spinner, Flex, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

const useProducts = () => {
  const filter = useSelector(state => state.filter.value);

  const selectFilteredProducts = useMemo(() => {
    return createSelector(
      [response => response.data, (_, filter) => filter],
      (products, filter) => {
        if (!filter) {
          return products ? products : [];
        }
        return products?.filter(product => product.provider === filter) ?? [];
      },
    );
  }, []);

  return useGetAllProductsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredProducts: selectFilteredProducts(result, filter),
      };
    },
  });
};

const Shop = () => {
  const { filteredProducts, error, isLoading } = useProducts();
  const cart = useSelector(state => state.cart);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="10">
      <GridItem colSpan={1}>
        <SideBar inCart={cart.cartItems.length} />
      </GridItem>

      {error && <p>Error! Oops...</p>}
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <GridItem colSpan={2}>
          <ProductList products={filteredProducts} />
        </GridItem>
      )}
      <Outlet />
    </Grid>
  );
};

export default Shop;
