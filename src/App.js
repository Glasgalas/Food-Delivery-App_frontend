import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
// import Shop from './pages/Shop';
// import ShoppingCart from './pages/ShoppingCart';
// import History from './pages/History';
import Layout from './components/Layout';

const Shop = lazy(() => import('./pages/Shop'));
const ShoppingCart = lazy(() => import('./pages/ShoppingCart'));
const History = lazy(() => import('./pages/History'));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<Loader />}>
              <ShoppingCart />
            </Suspense>
          }
        />
        <Route
          path="history"
          element={
            <Suspense fallback={<Loader />}>
              <History />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
