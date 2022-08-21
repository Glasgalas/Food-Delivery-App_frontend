import { Image, Text, Grid, GridItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const HistoryProductItem = ({ product }) => {
  const { name, price, imageURL } = product;

  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem colSpan={2}>
        <Image
          src={imageURL}
          alt={name}
          boxSize="120px"
          objectFit="contain"
          marginLeft="auto"
          marginRight="auto"
        />
      </GridItem>
      <GridItem>
        <div>
          <Text fontSize="lg">{name}</Text>
          <Text fontSize="lg">{price} ₴</Text>
        </div>
      </GridItem>
    </Grid>
  );
};

HistoryProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default HistoryProductItem;
