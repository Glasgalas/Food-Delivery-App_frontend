import { useDispatch, useSelector } from 'react-redux';
import {
  Flex,
  Image,
  Button,
  Tooltip,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Div, Wrap } from './CartProductItem.styled';
import {
  addToCart,
  decrementCart,
  deleteFromCart,
} from '../../redux/cartSlice';

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
    <Div>
      <Image
        src={imageURL}
        alt={name}
        boxSize="200px"
        objectFit="contain"
        marginLeft="auto"
        marginRight="auto"
      />
      <Wrap>
        <Flex display="flex" flexDirection="column" alignItems="flex-end">
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
      </Wrap>
    </Div>
  );
};
export default CartProductItem;
