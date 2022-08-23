import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Btn = ({ name, handleClick, active }) => {
  const cart = useSelector(state => state.cart);
  const inCart = cart.cartItems.length;

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      isDisabled={inCart}
      isActive={active === name}
      w={['20', '100px', '40']}
      mb={['10px', '20px', null]}
      size={['xs', 'sm', 'md']}
      fontSize={['xs', 'sm', 'md']}
      value={name}
      onClick={handleClick}
    >
      {name}
    </Button>
  );
};

Btn.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default Btn;
