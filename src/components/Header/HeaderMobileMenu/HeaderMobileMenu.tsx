import { default as AccountCircle } from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton, Menu, MenuItem } from '@mui/material';
import { MouseEvent } from 'react';

interface HeaderMobileMenuProps {
  mobileMenuId: string;
  isMobileMenuOpen: boolean;
  mobileMoreAnchorEl: null | HTMLElement;
  handleMobileMenuClose: () => void;
  handleProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
}

const HeaderMobileMenu = ({
  mobileMenuId = '',
  isMobileMenuOpen,
  mobileMoreAnchorEl,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}: HeaderMobileMenuProps) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};

export default HeaderMobileMenu;
