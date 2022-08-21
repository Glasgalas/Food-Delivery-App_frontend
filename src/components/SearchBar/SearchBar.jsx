import {
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  Flex,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    search(value);
    setValue('');
  };

  const handleSearchQueryOnKey = e => {
    if (e.key === 'Enter') {
      search(value);
      setValue('');
    }
  };

  return (
    <div>
      <Flex justifyContent="center" mb="10">
        <InputGroup w="50vw">
          <InputLeftAddon>
            <Search2Icon color="gray.300" />
          </InputLeftAddon>
          <Input
            placeholder="Enter your email, phone or order number"
            onChange={handleChange}
            value={value}
            onKeyPress={handleSearchQueryOnKey}
          />
          <Button onClick={handleSearch}>Search</Button>
        </InputGroup>
      </Flex>
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
