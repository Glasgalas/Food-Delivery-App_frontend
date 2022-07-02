import { Box, Button, useToast } from '@chakra-ui/react';
import { setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const SideBar = ({ inCart }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);
  const toast = useToast();
  const [isActive, setIsActive] = useState(false);

  const handleClick = e => {
    if (filter === e.target.value) {
      return;
    }
    setIsActive(e.target.value);
    dispatch(setFilter(e.target.value));
    toast({
      title: `Selected ${e.target.value}.`,
      description: `Filter goods from the ${e.target.value}.`,
      status: 'info',
      duration: 4000,
      position: 'bottom-right',
      isClosable: true,
    });
  };

  return (
    <Box
      h="80vh"
      borderWidth="1px"
      borderRadius="lg"
      display="flex"
      flexDir="column"
      justifyContent="space-around"
      alignItems="center"
      overflow="hidden"
    >
      <Button
        colorScheme="teal"
        variant="outline"
        isDisabled={inCart}
        isActive={isActive === 'McTonalts'}
        w="40"
        size="lg"
        value="McTonalts"
        onClick={handleClick}
      >
        McTonalts
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        isDisabled={inCart}
        isActive={isActive === 'BurgerQueen'}
        w="40"
        size="lg"
        value="BurgerQueen"
        onClick={handleClick}
      >
        BurgerQueen
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        isDisabled={inCart}
        isActive={isActive === 'KFSee'}
        w="40"
        size="lg"
        value="KFSee"
        onClick={handleClick}
      >
        KFSee
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        isDisabled={inCart}
        isActive={isActive === 'Pizza Hard'}
        w="40"
        size="lg"
        value="Pizza Hard"
        onClick={handleClick}
      >
        Pizza Hard
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        isDisabled={inCart}
        isActive={isActive === 'TommyNose'}
        w="40"
        size="lg"
        value="TommyNose"
        onClick={handleClick}
      >
        TommyNose
      </Button>
    </Box>
  );
};

export default SideBar;
