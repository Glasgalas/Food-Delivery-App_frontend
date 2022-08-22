import { Text, Grid, GridItem, Flex } from '@chakra-ui/react';
import HistoryProductItem from '../HistoryProductItem';
import PropTypes from 'prop-types';

const HistoryOrderItem = ({ order }) => {
  const { number, products, cartTotalAmount } = order;

  return (
    <Grid
      borderRadius="10"
      padding="10px"
      _hover={{
        boxShadow: 'dark-lg',
      }}
    >
      <Flex flexDir={['column', 'row']} justifyContent="space-between">
        <Text fontSize={['xs', 'sm', 'md']}>
          Order number:{' '}
          <Text fontSize={['sm', 'md', 'lg']} as="b">
            {number}
          </Text>
        </Text>
        <Text fontSize={['xs', 'sm', 'md']}>
          Total Price:{' '}
          <Text fontSize={['sm', 'md', 'lg']} as="b">
            {cartTotalAmount} ₴
          </Text>
        </Text>
      </Flex>
      <ul>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
          gap="5"
          overflowX="auto"
        >
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

HistoryOrderItem.propTypes = {
  order: PropTypes.object.isRequired,
};

export default HistoryOrderItem;
