import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { LayoutContainer } from './Layout.styles';

const Layout = () => {
  return (
    <div>
      <Header />

      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </div>
  );
};

export default Layout;
