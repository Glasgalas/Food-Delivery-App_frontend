import { Spinner, Flex } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Flex h="80vh" w="100vw" alignItems="center" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};
export default Loader;
