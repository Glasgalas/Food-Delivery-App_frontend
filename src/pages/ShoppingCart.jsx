import { useEffect } from 'react';
import {
  Grid,
  GridItem,
  Tooltip,
  Button,
  Link,
  Box,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';
import Form from '../components/Form';
import Map from '../components/Map';
import { clearForm, useAddOrderMutation } from '../redux/formSlice';
import {
  lengthMsg,
  nameMsg,
  emailMsg,
  phoneMsg,
  addressMsg,
  successMsg,
  errorMsg,
} from '../helpers/toast/messages';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const form = useSelector(state => state.form);
  const { name, email, phone, address } = form;
  const { cartItems, cartTotalQuantity, cartTotalAmount } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addOrder, data] = useAddOrderMutation();
  const { isSuccess, isError } = data;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const values = {
    name,
    email,
    phone,
    address,
    products: cartItems,
    cartTotalQuantity,
    cartTotalAmount,
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    onOpen();
  }, [isError]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleResetForm = () => {
    dispatch(clearForm());
  };

  const handleAddOrder = async values => {
    const { name, email, phone, address, products } = values;
    try {
      if (!products.length) {
        toast(lengthMsg);
        return;
      }
      if (!name) {
        toast(nameMsg);
        return;
      }
      if (!email) {
        toast(emailMsg);
        return;
      }
      if (!phone) {
        toast(phoneMsg);
        return;
      }
      if (!address) {
        toast(addressMsg);
        return;
      }

      await addOrder(values);

      if (isSuccess) {
        handleClearCart();
        handleResetForm();
        toast(successMsg);
      }
    } catch (error) {
      console.error(error);
      toast(errorMsg);
    }
  };

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
      gap={['10px', '20px', '30px']}
      px={['10px', '20px', '30px']}
      maxW="100vw"
    >
      {/* MAP */}
      <GridItem
        border="2px solid black"
        rowSpan={3}
        h={['auto']}
        overflowX="auto"
      >
        <Grid>
          <GridItem overflowX="auto" p={['10px', '20px', '30px']} pb="0">
            <Map />
          </GridItem>
          <GridItem overflowX="auto">
            <Form />
          </GridItem>
        </Grid>
      </GridItem>
      {/* CART ITEMS */}
      <GridItem
        border="2px solid black"
        colSpan={1}
        rowSpan={1}
        h={['auto', null, '60vh']}
        overflowX="auto"
      >
        {cartItems.length ? (
          <Cart />
        ) : isSuccess ? (
          <Text fontSize="lg" textAlign="center">
            Thank you for your purchase.
            <br /> Your order number:{' '}
            <Text fontSize="xl" as="b">
              {data.data.number}
            </Text>
          </Text>
        ) : (
          <Box
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="lg">There are no items in the cart yet</Text>
            <Link fontSize="lg" color="teal.500" onClick={() => navigate('/')}>
              Order something
            </Link>
          </Box>
        )}
      </GridItem>
      {/* CART TOTAL */}
      <GridItem
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        colSpan={1}
        rowSpan={1}
      >
        <Text fontSize={['xs', 'sm', 'md']}>
          Total quantity:{' '}
          <Text fontSize={['sm', 'md', 'lg']} as="b">
            {cartTotalQuantity}
          </Text>
        </Text>
        <Text fontSize={['xs', 'sm', 'md']}>
          Total amount:{' '}
          <Text fontSize={['sm', 'md', 'lg']} as="b">
            {cartTotalAmount} ₴
          </Text>
        </Text>
      </GridItem>
      {/* CART BUTTONS */}
      <GridItem
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="flex-end"
        colSpan={1}
        rowSpan={1}
      >
        <Tooltip label="Do you want to clear the form?" hasArrow arrowSize={15}>
          <Button
            colorScheme="yellow"
            w={['20', '120px', '40']}
            size={['xs', 'sm', 'md']}
            onClick={handleResetForm}
          >
            Clear form
          </Button>
        </Tooltip>
        <Tooltip label="Do you want to clear the cart?" hasArrow arrowSize={15}>
          <Button
            colorScheme="red"
            w={['20', '120px', '40']}
            size={['xs', 'sm', 'md']}
            onClick={handleClearCart}
          >
            Clear cart
          </Button>
        </Tooltip>
        <Tooltip label="Send an order?" hasArrow arrowSize={15}>
          <Button
            colorScheme="green"
            w={['20', '120px', '40']}
            size={['xs', 'sm', 'md']}
            onClick={() => handleAddOrder(values)}
          >
            Submit
          </Button>
        </Tooltip>
      </GridItem>

      {/* ERROR */}
      {isError && (
        <Modal isOpen={isOpen} onClose={() => onClose()}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Error {data.error.status}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{data.error.data.message}</ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Grid>
  );
};

export default ShoppingCart;
