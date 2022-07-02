import { useEffect } from 'react';
import {
  Grid,
  GridItem,
  Flex,
  Spinner,
  Tooltip,
  Button,
  Link,
  Box,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/Cart';
import Form from '../components/Form';
import Map from '../components/Map';
import { clearForm, useAddOrderMutation } from '../redux/formSlice';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const form = useSelector(state => state.form);
  const { name, email, phone, address } = form;
  const { cartItems, cartTotalQuantity, cartTotalAmount } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addOrder, data] = useAddOrderMutation();
  const { isSuccess } = data;

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
        toast({
          title: 'Attention!',
          description: 'You have not selected anything yet.',
          status: 'warning',
          duration: 4000,
          position: 'bottom-right',
          isClosable: true,
        });
        return;
      }
      if (!name) {
        toast({
          title: 'Attention!',
          description: 'Fill in the name field.',
          status: 'warning',
          duration: 4000,
          position: 'bottom-right',
          isClosable: true,
        });
        return;
      }
      if (!email) {
        toast({
          title: 'Attention!',
          description: 'Fill in the email field.',
          status: 'warning',
          duration: 4000,
          position: 'bottom-right',
          isClosable: true,
        });
        return;
      }
      if (!phone) {
        toast({
          title: 'Attention!',
          description: 'Fill in the phone field.',
          status: 'warning',
          duration: 4000,
          position: 'bottom-right',
          isClosable: true,
        });
        return;
      }
      if (!address) {
        toast({
          title: 'Attention!',
          description: 'Fill in the address field.',
          status: 'warning',
          duration: 4000,
          position: 'bottom-right',
          isClosable: true,
        });
        return;
      }

      await addOrder(values);
      handleClearCart();
      handleResetForm();
      toast({
        title: 'Succes!',
        description: 'The order has been sent to the queue.',
        status: 'success',
        duration: 4000,
        position: 'bottom-right',
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error!',
        description: 'There are some problems on the server, please try again',
        status: 'error',
        duration: 4000,
        position: 'bottom-right',
        isClosable: true,
      });
    }
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap="5"
      paddingLeft="10"
      paddingRight="10"
    >
      <GridItem border="2px solid black" rowSpan={3} h="80vh" overflowX="auto">
        <Grid>
          <GridItem overflowX="auto" padding="10" pb="0">
            <Map />
          </GridItem>
          <GridItem overflowX="auto">
            <Form />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem
        border="2px solid black"
        colSpan={1}
        rowSpan={1}
        h="60vh"
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
      <GridItem
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
        colSpan={1}
        rowSpan={1}
      >
        <Text fontSize="xl">
          Total quantity:{' '}
          <Text fontSize="xl" as="b">
            {cartTotalQuantity}
          </Text>
        </Text>
        <Text fontSize="xl">
          Total amount:{' '}
          <Text fontSize="xl" as="b">
            {cartTotalAmount} ₴
          </Text>
        </Text>
      </GridItem>
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
            w="40"
            size="lg"
            onClick={handleResetForm}
          >
            Clear form
          </Button>
        </Tooltip>
        <Tooltip label="Do you want to clear the cart?" hasArrow arrowSize={15}>
          <Button colorScheme="red" w="40" size="lg" onClick={handleClearCart}>
            Clear cart
          </Button>
        </Tooltip>
        <Tooltip label="Send an order?" hasArrow arrowSize={15}>
          <Button
            colorScheme="green"
            w="40"
            size="lg"
            onClick={() => handleAddOrder(values)}
          >
            Submit
          </Button>
        </Tooltip>
      </GridItem>
    </Grid>
  );
};

export default ShoppingCart;
