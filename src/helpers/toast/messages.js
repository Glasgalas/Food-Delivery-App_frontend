export const lengthMsg = {
  title: 'Attention!',
  description: 'You have not selected anything yet.',
  status: 'warning',
  duration: 4000,
  position: 'bottom-right',
  isClosable: true,
};
export const nameMsg = {
  title: 'Attention!',
  description: 'Fill in the name field.',
  status: 'warning',
  duration: 4000,
  position: 'bottom-right',
  isClosable: true,
};
export const emailMsg = {
  title: 'Attention!',
  description: 'Fill in the email field.',
  status: 'warning',
  duration: 4000,
  position: 'bottom-right',
  isClosable: true,
};
export const phoneMsg = {
  title: 'Attention!',
  description: 'Fill in the phone field.',
  status: 'warning',
  duration: 4000,
  position: 'bottom-right',
  isClosable: true,
};
export const addressMsg = {
  title: 'Attention!',
  description: 'Fill in the address field.',
  status: 'warning',
  duration: 4000,
  position: 'bottom-right',
  isClosable: true,
};
export const successMsg = {
  title: 'Succes!',
  description: 'The order has been sent to the queue.',
  status: 'success',
  duration: 4000,
  position: 'bottom-right',
  isClosable: true,
};
export const errorMsg = {
  title: 'Error!',
  description: 'There are some problems on the server, please try again',
  status: 'error',
  duration: 4000,
  position: 'bottom-right',
  isClosable: true,
};
export const selectMsg = e => {
  return {
    title: `Selected ${e.target.value}.`,
    description: `Filter goods from the ${e.target.value}.`,
    status: 'info',
    duration: 4000,
    position: 'bottom-right',
    isClosable: true,
  };
};
export const addedToCart = {
  title: 'Added to cart.',
  description: 'The product has been added to the cart.',
  status: 'success',
  duration: 4000,
  position: 'bottom-right',
  isClosable: true,
};
