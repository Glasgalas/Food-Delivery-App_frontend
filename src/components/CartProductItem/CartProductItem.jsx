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
  useColorMode,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  addToCart,
  decrementCart,
  deleteFromCart,
} from '../../redux/cartSlice';
import PropTypes from 'prop-types';

const CartProductItem = ({ product }) => {
  const { colorMode } = useColorMode();
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
      <Image
        src={imageURL}
        alt={name}
        boxSize={['150px', '200px', '200px']}
        objectFit="contain"
        marginLeft="auto"
        marginRight="auto"
      />
      <Flex flexDir="column" justifyContent="space-between">
        <Flex flexDir="column" alignItems="flex-end">
          <IconButton
            size={['xs', 'sm', 'md']}
            colorScheme="red"
            onClick={() => handleDeleteFromCart(product)}
            icon={<CloseIcon />}
          />
        </Flex>
        <div>
          <Text fontSize={['xs', 'sm', 'md']}>{name}</Text>
          <Text fontSize={['sm', 'md', 'lg']}>{price} ₴</Text>
        </div>
        <div>
          <NumberInput
            size={['sm', 'md', 'lg']}
            maxW={36}
            min={1}
            color={colorMode === 'light' ? 'black' : 'white'}
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
