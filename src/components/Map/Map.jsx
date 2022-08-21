import { useSelector } from 'react-redux';

const Map = () => {
  const cart = useSelector(state => state.cart);
  const form = useSelector(state => state.form);
  const { address } = form;
  const { cartItems } = cart;

  const originOrder = cartItems[0]?.address ? cartItems[0].address : '';
  const originDefault = cartItems[0]
    ? cartItems[0]?.address
    : 'вулиця Хрещатик, 1, Київ, 02000';
  return (
    <div>
      {address && cartItems[0] ? (
        <iframe
          width="100%"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/directions?origin=${originOrder}&destination=${address}&key=${process.env.REACT_APP_API_KEY}`}
        />
      ) : (
        <iframe
          width="100%"
          height="300"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?q=${originDefault}&key=${process.env.REACT_APP_API_KEY}`}
        />
      )}
    </div>
  );
};

export default Map;
