import { Image, Button, Tooltip, Text, useToast } from '@chakra-ui/react';
import { Div, Wrap } from './ProductItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { getTotals } from '../../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageURL } = product;
  const toast = useToast();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
    dispatch(getTotals());
    toast({
      title: 'Added to cart.',
      description: 'The product has been added to the cart.',
      status: 'success',
      duration: 4000,
      position: 'bottom-right',
      isClosable: true,
    });
  };

  return (
    <Div>
      <Image
        src={imageURL}
        alt={name}
        boxSize="250px"
        objectFit="contain"
        marginLeft="auto"
        marginRight="auto"
      />
      <Wrap>
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
      </Wrap>
    </Div>
  );
};
export default ProductItem;
