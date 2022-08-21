import { Grid, GridItem } from '@chakra-ui/react';
import CartProductItem from '../CartProductItem';
import PropTypes from 'prop-types';

const CartProductList = ({ products }) => {
  return (
    <ul>
      <Grid templateColumns="repeat(1, 1fr)" padding="10" gap="5">
        {products.map(product => (
          <li key={product._id}>
            <GridItem colSpan={1}>
              <CartProductItem product={product} />
            </GridItem>
          </li>
        ))}
      </Grid>
    </ul>
  );
};

CartProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CartProductList;
