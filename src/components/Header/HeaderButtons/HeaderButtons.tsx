import {
  default as AccountCircle,
  default as AccountCircleIcon,
} from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, IconButton } from '@mui/material';
import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../../constants';
import { HeaderButtonsWrapper } from './HeaderButtons.styles';

interface HeaderButtonsProps {
  menuId: string;
  mobileMenuId: string;
  handleProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
  handleMobileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
}
const HeaderButtons = ({
  menuId,
  mobileMenuId,
  handleProfileMenuOpen,
  handleMobileMenuOpen,
}: HeaderButtonsProps) => {
  return (
    <>
      <HeaderButtonsWrapper>
        <NavLink to={PAGES.PROFILE}>
          <IconButton size="large" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </NavLink>

        <NavLink to={PAGES.FAVORITES}>
          <IconButton size="large" color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
        </NavLink>

        <NavLink to={PAGES.CART}>
          <IconButton size="large" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </NavLink>

        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </HeaderButtonsWrapper>

      <Box sx={{ display: { xs: 'flex', md: 'none' } }} id="mobile-header">
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default HeaderButtons;
