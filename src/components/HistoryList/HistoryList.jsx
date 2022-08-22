import { Grid, GridItem, Text, Divider } from '@chakra-ui/react';
import HistoryOrderItem from '../HistoryOrderItem';
import PropTypes from 'prop-types';

const HistoryList = ({ orders }) => {
  return (
    <ul>
      <Grid
        templateColumns="repeat(1, 1fr)"
        padding="10px"
        gap="5"
        h="70vh"
        overflowX="auto"
      >
        <Text>Found matches!</Text>
        <Text fontSize={['xs', 'sm', 'md']}>Name: {orders[0].name}</Text>
        <Text fontSize={['xs', 'sm', 'md']}>Email: {orders[0].email}</Text>
        <Text fontSize={['xs', 'sm', 'md']}>Phone: {orders[0].phone}</Text>
        <Text fontSize={['xs', 'sm', 'md']}>Total orders: {orders.length}</Text>
        {orders.map(order => (
          <li key={order._id}>
            <GridItem colSpan={1}>
              <Divider />
              <HistoryOrderItem order={order} />
            </GridItem>
          </li>
        ))}
      </Grid>
    </ul>
  );
};

HistoryList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default HistoryList;
