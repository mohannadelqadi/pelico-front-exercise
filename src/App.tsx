import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import MainLayout from './layouts/MainLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='mycart' element={<Cart />} />
      </Route>
    )
  );

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
