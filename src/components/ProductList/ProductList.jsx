import ProductItem from '../ProductItem';
import { Grid, GridItem } from '@chakra-ui/react';

const ProductList = ({ products }) => {
  return (
    <ul>
      <Grid templateColumns="repeat(2, 1fr)" gap="5" h="90vh" overflowX="auto">
        {products.map(product => (
          <li key={product._id}>
            <GridItem padding="10" colSpan={1}>
              <ProductItem product={product} />
            </GridItem>
          </li>
        ))}
      </Grid>
    </ul>
  );
};

export default ProductList;
