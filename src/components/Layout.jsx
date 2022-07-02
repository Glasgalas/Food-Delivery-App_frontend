import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ActiveLink = {
  textDecoration: 'underline',
};

export default function Layout() {
  const cart = useSelector(state => state.cart);
  const { cartTotalQuantity } = cart;

  return (
    <Box marginTop="80px">
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
            templateColumns="repeat(3, 1fr)"
            justifyItems="center"
            padding="15px"
            color="blueviolet"
            fontSize="26px"
          >
            <GridItem colSpan={1}>
              <Flex alignItems="center">
                <Image
                  src="images/icons/shop.png"
                  alt="logo"
                  boxSize="26px"
                  objectFit="contain"
                  marginLeft="auto"
                  marginRight="5px"
                />
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? ActiveLink : undefined)}
                >
                  SHOP
                </NavLink>
              </Flex>
            </GridItem>

            <GridItem colSpan={1}>
              <Flex alignItems="center">
                <Image
                  src="images/icons/cart.png"
                  alt="logo"
                  boxSize="26px"
                  objectFit="contain"
                  marginLeft="auto"
                  marginRight="5px"
                />
                <NavLink
                  to="cart"
                  style={({ isActive }) => (isActive ? ActiveLink : undefined)}
                >
                  SHOPPING CART
                </NavLink>
                {cartTotalQuantity > 0 && (
                  <Box
                    w="10"
                    borderRadius="50%"
                    bg="red"
                    textAlign="center"
                    ml="5"
                    color="white"
                  >
                    {cartTotalQuantity}
                  </Box>
                )}
              </Flex>
            </GridItem>

            <GridItem colSpan={1}>
              <Flex alignItems="center">
                <Image
                  src="images/icons/history.png"
                  alt="logo"
                  boxSize="26px"
                  objectFit="contain"
                  marginLeft="auto"
                  marginRight="5px"
                />
                <NavLink
                  to="history"
                  style={({ isActive }) => (isActive ? ActiveLink : undefined)}
                >
                  HISTORY
                </NavLink>
              </Flex>
            </GridItem>
          </Grid>
        </nav>
      </Box>
      <Outlet />
    </Box>
  );
}
