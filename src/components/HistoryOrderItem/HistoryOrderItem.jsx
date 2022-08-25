import { Text, Grid, GridItem, Flex, useColorMode } from '@chakra-ui/react';
import HistoryProductItem from '../HistoryProductItem';
import PropTypes from 'prop-types';

const HistoryOrderItem = ({ order }) => {
  const { number, products, cartTotalAmount } = order;
  const { colorMode } = useColorMode();

  return (
    <Grid
      borderRadius="10"
      padding="10px"
      _hover={
        colorMode === 'light'
          ? {
              boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.25)',
            }
          : {
              boxShadow: '5px 5px 15px 5px rgba(228, 209, 2,  0.24)',
            }
      }
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
