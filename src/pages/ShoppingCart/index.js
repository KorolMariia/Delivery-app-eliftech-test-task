import Order from './Order';
import Form from './Form';
import { Box, Typography } from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const ShoppingCart = () => {
  return (
    <>
      <Typography variant="subtitle1" >
        Your order <FavoriteOutlinedIcon />
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Form />
        <Order />
      </Box>
    </>
  )
};

export default ShoppingCart;
