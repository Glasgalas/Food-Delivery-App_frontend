import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import CartProductList from '../CartProductList';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <Box>
      <CartProductList products={cartItems} />
    </Box>
  );
};
export default Cart;
