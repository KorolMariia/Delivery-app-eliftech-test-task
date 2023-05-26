import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '../../Components/ProductCard';

const Order = memo(() => {
  const productsInCart = useSelector(({ delivery }) => delivery.productsInCart);

  return (
    <Box sx={{ maxHeight: '50vh', overflow: 'auto', padding: '10px' }}>
      <Grid container spacing={3} justifyContent='center'>
        {productsInCart.length > 0 ?
          productsInCart.map((product) => <ProductCard product={product.product} q={product.quantity} key={product.product.uri} />)
          : <Typography variant="h6" >
            You haven't added any products to your order yet.
          </Typography>
        }
      </Grid>
    </Box>
  );
}
);

export default Order;
