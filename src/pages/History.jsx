import SearchBar from '../components/SearchBar';
import HistoryList from '../components/HistoryList';
import { useGetAllOrdersQuery } from '../redux/formSlice';
import { useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

const useOrders = searchQuery => {
  const selectFilteredOrders = useMemo(() => {
    return createSelector(
      [response => response.data, (_, searchQuery) => searchQuery],
      (orders, searchQuery) => {
        if (!searchQuery) {
          return null;
        }
        if (searchQuery.includes('@')) {
          return orders?.filter(order => order.email === searchQuery) ?? [];
        }
        if (searchQuery.includes('-')) {
          return orders?.filter(order => order.number === searchQuery) ?? [];
        }
        if (!isNaN(searchQuery)) {
          return orders?.filter(order => order.phone === searchQuery) ?? [];
        }
      },
    );
  }, []);

  return useGetAllOrdersQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredOrders: selectFilteredOrders(result, searchQuery),
      };
    },
  });
};

const History = () => {
  const [query, setQuery] = useState('');
  const { filteredOrders, error } = useOrders(query);

  const handleSearch = value => {
    setQuery(value);
  };

  return (
    <Box px={['10px', '15px', '30px']}>
      <SearchBar search={handleSearch} />
      {error ? (
        <>Oh no, there was an error</>
      ) : filteredOrders === null ? null : filteredOrders === undefined ||
        filteredOrders.length === 0 ? (
        <Text fontSize="lg" textAlign="center">
          No matches found for query: {query}
        </Text>
      ) : filteredOrders ? (
        <HistoryList orders={filteredOrders} />
      ) : null}
    </Box>
  );
};

export default History;
