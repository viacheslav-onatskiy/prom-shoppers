import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../constants';
import { HeaderContainer } from './Header.styles';
import HeaderButtons from './HeaderButtons';
import HeaderMenu from './HeaderMenu';
import HeaderMobileMenu from './HeaderMobileMenu';
import HeaderSearch from './HeaderSearch';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <NavLink to={PAGES.HOME}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              Prom Shoppers
            </Box>
          </NavLink>

          <HeaderSearch />

          <HeaderButtons
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleMobileMenuOpen={handleMobileMenuOpen}
          />
        </Toolbar>
      </AppBar>

      <HeaderMobileMenu
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />

      <HeaderMenu
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
      />
    </HeaderContainer>
  );
};

export default Header;
