import Order from './Order';
import Form from './Form';
import ConfirmOrder from './ConfirmOrder';
import { Box, Typography } from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const ShoppingCart = () => {
  return (
    <>
      <Typography variant="subtitle1" >
        Your order <FavoriteOutlinedIcon />
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
        <Form />
        <Order />
      </Box>
      <ConfirmOrder />
    </>
  )
};

export default ShoppingCart;
