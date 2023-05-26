import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Toolbar, AppBar } from '@mui/material';

const pages = ['Shop', 'ShoppingCart', 'Coupons', 'History'];

const Nav = memo(() => (
  <AppBar sx={{ position: 'static', bgcolor: '#fbec5d', padding: '0 30px' }}>
    <Toolbar disableGutters>
      <Box sx={{ mr: 2, display: 'flex' }}>
        <img src="images/logo.png" alt="Logo" width="100" height="100" />
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', gap: '40px', justifyContent: 'center' }}>
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
    </Toolbar>
  </AppBar>
));

export default Nav;
