import { Flex, Image, Button, Tooltip, Text, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { getTotals } from '../../redux/cartSlice';
import { addedToCart } from '../../helpers/toast/messages';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageURL } = product;
  const toast = useToast();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
    dispatch(getTotals());
    toast(addedToCart);
  };

  return (
    <Flex
      flexDir="column"
      borderRadius="10px"
      p="10px"
      _hover={{
        boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Image
        src={imageURL}
        alt={name}
        boxSize="250px"
        objectFit="contain"
        marginLeft="auto"
        marginRight="auto"
      />
      <Flex flexDir="row" justifyContent="space-between">
        <div>
          <Text fontSize="lg">{name}</Text>
          <Text fontSize="lg">{price} ₴</Text>
        </div>
        <Tooltip
          label="This product will be added to the cart"
          hasArrow
          arrowSize={15}
        >
          <Button
            colorScheme="cyan"
            w="40"
            size="lg"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ProductItem;
