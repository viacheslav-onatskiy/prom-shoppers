import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { PAGES } from './constants';
import { Cart, Favorites, Home, NotFound, ProductPage, Profile } from './pages';

interface RouteElement {
  path: string;
  element: JSX.Element;
}

const routes: RouteElement[] = [
  { path: PAGES.HOME, element: <Home /> },
  { path: PAGES.CART, element: <Cart /> },
  { path: PAGES.FAVORITES, element: <Favorites /> },
  { path: PAGES.PROFILE, element: <Profile /> },
  { path: `${PAGES.PRODUCT}/:id`, element: <ProductPage /> },
  { path: '*', element: <NotFound /> },
];

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PAGES.HOME} element={<Layout />}>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
