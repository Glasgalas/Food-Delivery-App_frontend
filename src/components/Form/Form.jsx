import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../../redux/formSlice';

const Form = () => {
  const dispatch = useDispatch();
  const form = useSelector(state => state.form);
  const { name, email, phone, address } = form;

  const handleChange = e => {
    const name = e.target.id;
    const value = e.target.value;
    dispatch(setForm({ name, value }));
  };

  return (
    <FormControl padding="10">
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input
        id="name"
        value={name}
        type="text"
        placeholder="Jon Snow"
        onChange={e => handleChange(e)}
      />
      <FormLabel htmlFor="email">Email address</FormLabel>
      <Input
        id="email"
        value={email}
        type="email"
        placeholder="aegon.targaryen@mail.com"
        onChange={e => handleChange(e)}
      />
      <FormLabel htmlFor="phone">Phone number</FormLabel>
      <InputGroup>
        <InputLeftAddon children="+(38)" />
        <Input
          id="phone"
          value={phone}
          type="tel"
          placeholder="096 123 1234"
          maxLength={10}
          minLength={10}
          onChange={e => handleChange(e)}
        />
      </InputGroup>
      <FormLabel htmlFor="address">Address</FormLabel>
      <Textarea
        id="address"
        value={address}
        type="text"
        overflow="visible"
        placeholder="Night's Watch, Castle Black, The Wall"
        onChange={e => handleChange(e)}
      />
    </FormControl>
  );
};

export default Form;
