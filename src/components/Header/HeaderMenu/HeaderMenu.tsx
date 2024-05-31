import { Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../../constants';

interface HeaderMenuProps {
  menuId: string;
  isMenuOpen: boolean;
  anchorEl: null | HTMLElement;
  handleMenuClose: () => void;
}

const HeaderMenu = ({
  menuId = '',
  isMenuOpen,
  anchorEl,
  handleMenuClose,
}: HeaderMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      className={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink to={PAGES.PROFILE} id="header-button">
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </NavLink>
      <NavLink to={PAGES.PROFILE} id="header-button">
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </NavLink>
    </Menu>
  );
};

export default HeaderMenu;
