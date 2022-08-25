import { FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';

const MenuBurger = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList fontSize={['md', 'lg', '2xl']}>
        <MenuGroup title="Color mode">
          <MenuItem
            onClick={toggleColorMode}
            icon={
              <IconButton
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                isRound="true"
                size={['xs', 'md', 'lg']}
                bgColor="transparent"
                alignSelf="flex-end"
              />
            }
          >
            {colorMode === 'light' ? 'Dark mode' : 'Light mode'}
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Language">
          <MenuItem
            icon={
              <IconButton
                icon={<FaGlobe />}
                isRound="true"
                size={['xs', 'md', 'lg']}
                bgColor="transparent"
                alignSelf="flex-end"
              />
            }
          >
            English
          </MenuItem>
          <Tooltip label="Will be soon" hasArrow arrowSize={15}>
            <MenuItem
              icon={
                <IconButton
                  icon={<FaGlobe />}
                  isRound="true"
                  size={['xs', 'md', 'lg']}
                  bgColor="transparent"
                  alignSelf="flex-end"
                />
              }
            >
              Ukranian
            </MenuItem>
          </Tooltip>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default MenuBurger;
