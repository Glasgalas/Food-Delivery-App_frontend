import { Grid, GridItem } from '@chakra-ui/react';
import CartProductItem from '../CartProductItem';
import PropTypes from 'prop-types';

const CartProductList = ({ products }) => {
  return (
    <ul>
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={['10px', '20px', '30px']}
        p={['10px', '20px', '30px']}
      >
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
