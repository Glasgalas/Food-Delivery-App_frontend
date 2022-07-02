import {
  Image,
  Button,
  Tooltip,
  Text,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import HistoryProductItem from '../HistoryProductItem';

const HistoryOrderItem = ({ order }) => {
  const { number, products, cartTotalAmount } = order;

  return (
    <Grid
      borderRadius="10"
      padding="10"
      _hover={{
        boxShadow: 'dark-lg',
      }}
    >
      <Flex justifyContent="space-between">
        <Text fontSize="lg">
          Order number:{' '}
          <Text fontSize="xl" as="b">
            {number}
          </Text>
        </Text>
        <Text fontSize="lg">
          Total Price:{' '}
          <Text fontSize="xl" as="b">
            {cartTotalAmount} ₴
          </Text>
        </Text>
      </Flex>
      <ul>
        <Grid templateColumns="repeat(2, 1fr)" gap="5" overflowX="auto">
          {products.map(product => (
            <li key={product._id}>
              <GridItem padding="10" colSpan={1}>
                <HistoryProductItem product={product} />
              </GridItem>
            </li>
          ))}
        </Grid>
      </ul>
    </Grid>
  );
};
export default HistoryOrderItem;
