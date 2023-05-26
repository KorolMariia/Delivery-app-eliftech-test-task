import Shops from './Shops';
import ShopProducts from './ShopProducts';
import { Box } from '@mui/material';

const Shop = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Shops />
      <ShopProducts />
    </Box>
  );
};

export default Shop;