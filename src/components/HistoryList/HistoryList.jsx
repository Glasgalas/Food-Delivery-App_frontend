import { Grid, GridItem, Divider } from '@chakra-ui/react';
import HistoryOrderItem from '../HistoryOrderItem';

const HistoryList = ({ orders }) => {
  return (
    <ul>
      <Grid
        templateColumns="repeat(1, 1fr)"
        padding="10"
        gap="5"
        h="70vh"
        overflowX="auto"
      >
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
export default HistoryList;
