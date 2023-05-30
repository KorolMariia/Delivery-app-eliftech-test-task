import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Toolbar, AppBar, Menu, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Shop', 'ShoppingCart', 'Coupons', 'History'];

const Nav = memo(() => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ position: 'static', bgcolor: '#fbec5d', padding: '0 30px' }}>
      <Toolbar disableGutters>
        <Box sx={{ mr: 2, display: 'flex' }}>
          <img src="images/logo.png" alt="Logo" width="100" height="100" />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '40px', justifyContent: 'center' }}>
          {pages.map((page) => (
            <NavLink
              key={page}
              to={page === 'Shop' ? '/' : page.toLowerCase()}
              style={{ color: '#ce0030', textDecoration: 'none', fontSize: '1.3em' }}
            >
              {page}
            </NavLink>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            <Box sx={{ padding: '30px 60px', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
              {pages.map((page) => (
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : null)}
                  key={page} onClick={handleCloseNavMenu}
                  to={page === 'Shop' ? '/' : `/${page.toLowerCase()}`}
                  style={{ color: '#ce0030', textDecoration: 'none', fontSize: '1.3em' }}
                >

                  {page}
                </NavLink>
              ))}
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
});

export default Nav;
