import {
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  Flex,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useState } from 'react';

const SearchBar = ({ search, searchOnKey }) => {
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
      searchOnKey(value);
      setValue('');
    }
  };

  return (
    <div>
      <Flex justifyContent="center" mb="10">
        <InputGroup w="50vw">
          <InputLeftAddon children={<Search2Icon color="gray.300" />} />
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

export default SearchBar;
