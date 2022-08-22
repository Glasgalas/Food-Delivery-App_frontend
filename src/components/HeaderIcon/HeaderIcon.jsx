import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const HeaderIcon = ({ srcImg }) => {
  return (
    <Image
      src={srcImg}
      alt="logo"
      boxSize="26px"
      objectFit="contain"
      marginLeft="auto"
      marginRight="5px"
    />
  );
};

HeaderIcon.propTypes = {
  srcImg: PropTypes.string.isRequired,
};

export default HeaderIcon;
