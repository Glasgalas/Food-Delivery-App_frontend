import { Grid, GridItem } from '@chakra-ui/react';
import ProductItem from '../ProductItem';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  return (
    <ul>
      <Grid
        templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
        gap="5"
        overflowX="auto"
      >
        {products.map(product => (
          <li key={product._id}>
            <GridItem p={['10px', '20px', '30px']} colSpan={1}>
              <ProductItem product={product} />
            </GridItem>
          </li>
        ))}
      </Grid>
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
