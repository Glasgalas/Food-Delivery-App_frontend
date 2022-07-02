import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';
import History from './pages/History';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
};

export default App;
