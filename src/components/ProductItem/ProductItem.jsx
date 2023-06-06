import {
  Flex,
  Box,
  Image,
  Button,
  Tooltip,
  Text,
  useToast,
  useColorMode,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { getTotals } from '../../redux/cartSlice';
import { addedToCart } from '../../helpers/toast/messages';
import PropTypes from 'prop-types';
import s from './productItem.module.css';

const ProductItem = ({ product }) => {
  const { colorMode } = useColorMode();
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
      className={s.box}
      flexDir="column"
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
        className={s.img}
        src={imageURL}
        alt={name}
        boxSize={['120px', '170px', '200px']}
        objectFit="contain"
        marginLeft="auto"
        marginRight="auto"
      />
      <Box>
        <div className={s.txt}>
          <Text fontSize={['xs', 'sm', 'md']}>{name}</Text>
        </div>
        <Flex flexDir="row" justifyContent="space-between" alignItems="center">
          <div className={s.price}>
            <Text fontSize={['sm', 'md', 'lg']}>{price} ₴</Text>
          </div>

          <div>
            <Tooltip
              label="This product will be added to the cart"
              hasArrow
              arrowSize={15}
            >
              <Button
                className={s.btn}
                colorScheme="cyan"
                w={['20', '120px', '40']}
                size={['xs', 'sm', 'md']}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Tooltip>
          </div>
        </Flex>
      </Box>
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
