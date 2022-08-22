import { Box, useToast } from '@chakra-ui/react';
import { setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectMsg } from '../../helpers/toast/messages';
import Btn from '../Button';

const SideBar = () => {
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
    toast(selectMsg(e));
  };

  return (
    <Box
      h="100%"
      borderWidth="1px"
      p={['5px']}
      borderRadius="lg"
      display="flex"
      flexDir="column"
      justifyContent={['flex-start']}
      alignItems="center"
      overflow="hidden"
      pos="fixed"
    >
      <Btn name={'McTonalts'} handleClick={handleClick} active={isActive} />
      <Btn name={'BurgerQueen'} handleClick={handleClick} active={isActive} />
      <Btn name={'KFSee'} handleClick={handleClick} active={isActive} />
      <Btn name={'Pizza Hard'} handleClick={handleClick} active={isActive} />
      <Btn name={'TommyNose'} handleClick={handleClick} active={isActive} />
    </Box>
  );
};

export default SideBar;
