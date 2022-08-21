import { useDispatch, useSelector } from 'react-redux';
import {
  Flex,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  addToCart,
  decrementCart,
  deleteFromCart,
} from '../../redux/cartSlice';
import PropTypes from 'prop-types';

const CartProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageURL } = product;
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const handleDecrementCart = product => {
    dispatch(decrementCart(product));
  };

  const handleDeleteFromCart = product => {
    dispatch(deleteFromCart(product));
  };

  const getQuantity = product => {
    const item = cartItems.find(el => el._id === product._id);
    return item.cartQuantity;
  };

  const quantityProduct = getQuantity(product);

  return (
    <Flex
      flexDir="row"
      border="1px"
      borderRadius="10px"
      p="10px"
      _hover={{
        boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Image
        src={imageURL}
        alt={name}
        boxSize="200px"
        objectFit="contain"
        marginLeft="auto"
        marginRight="auto"
      />
      <Flex flexDir="column" justifyContent="space-between">
        <Flex flexDir="column" alignItems="flex-end">
          <IconButton
            colorScheme="red"
            onClick={() => handleDeleteFromCart(product)}
            icon={<CloseIcon />}
          />
        </Flex>
        <div>
          <Text fontSize="lg">{name}</Text>
          <Text fontSize="lg">{price} ₴</Text>
        </div>
        <div>
          <NumberInput
            size="lg"
            maxW={36}
            min={1}
            color="black"
            value={quantityProduct}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper
                onClick={() => handleAddToCart(product)}
              />
              <NumberDecrementStepper
                onClick={() => handleDecrementCart(product)}
              />
            </NumberInputStepper>
          </NumberInput>
        </div>
      </Flex>
    </Flex>
  );
};

CartProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartProductItem;
