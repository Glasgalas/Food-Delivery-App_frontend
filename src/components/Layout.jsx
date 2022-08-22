import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Box, Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import HeaderIcon from '../components/HeaderIcon';

const ActiveLink = {
  textDecoration: 'underline',
};

export default function Layout() {
  const cart = useSelector(state => state.cart);
  const { cartTotalQuantity } = cart;

  return (
    <Box marginTop={['130px', '80px', '90px']} mb="40px">
      <GlobalStyle />
      <Box
        pos="fixed"
        top="0"
        zIndex="9"
        w="100%"
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        boxShadow="rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;"
      >
        <nav>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
            justifyItems={['flex-start', 'center']}
            alignItems="center"
            padding="15px"
            color="blueviolet"
            fontSize="26px"
            pl={['20px', 0]}
          >
            <GridItem colSpan={1}>
              <Flex alignItems="center">
                <HeaderIcon srcImg={'images/icons/shop.png'} />

                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? ActiveLink : undefined)}
                >
                  <Text casing="uppercase" fontSize={['md', 'lg', '2xl']}>
                    Shop
                  </Text>
                </NavLink>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex alignItems="center">
                <HeaderIcon srcImg={'images/icons/cart.png'} />
                <NavLink
                  to="cart"
                  style={({ isActive }) => (isActive ? ActiveLink : undefined)}
                >
                  <Text casing="uppercase" fontSize={['md', 'lg', '2xl']}>
                    Shopping Cart
                  </Text>
                </NavLink>
                {cartTotalQuantity > 0 && (
                  <Box
                    w={['30px', null, '35px']}
                    h={['30px', null, '35px']}
                    p="5px"
                    borderRadius="50%"
                    bg="red"
                    textAlign="center"
                    ml={['2', '3', '5']}
                    color="white"
                    fontSize={['xs', 'sm', 'md']}
                  >
                    {cartTotalQuantity}
                  </Box>
                )}
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex alignItems="center">
                <HeaderIcon srcImg={'images/icons/history.png'} />
                <NavLink
                  to="history"
                  style={({ isActive }) => (isActive ? ActiveLink : undefined)}
                >
                  <Text casing="uppercase" fontSize={['md', 'lg', '2xl']}>
                    History
                  </Text>
                </NavLink>
              </Flex>
            </GridItem>
          </Grid>
        </nav>
      </Box>
      <Outlet />
      <Box
        pos="fixed"
        bottom="0"
        w="100%"
        zIndex="9"
        bgGradient={['linear(to-b, orange.100, purple.300)']}
        boxShadow="rgba(0, 0, 0, 0.45) 0px -8px 20px 0px"
        h="30px"
        textAlign="center"
      >
        &copy; 2022 | Developed by{' '}
        <a href="https://github.com/Glasgalas">Glasgalas</a>
      </Box>
    </Box>
  );
}
