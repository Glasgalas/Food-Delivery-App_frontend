import { useSelector } from 'react-redux';
import CartProductList from '../CartProductList';
import { Box } from '@chakra-ui/react';

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
