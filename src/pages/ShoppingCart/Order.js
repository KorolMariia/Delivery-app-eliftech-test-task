import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '../../Components/ProductCard';

const Order = memo(() => {
  const productsInCart = useSelector(({ delivery }) => delivery.productsInCart);

  return (
    <Box sx={{ maxHeight: '55vh', overflow: 'auto', padding: '10px' }}>
      <Grid container spacing={2} justifyContent='center'>
        {productsInCart.length > 0 ?
          productsInCart.map((recipe) => <ProductCard product={recipe} key={recipe.uri} />)
          : <Typography variant="subtitle1" >
            You haven't added any products to your order yet.
          </Typography>
        }
      </Grid>
    </Box>
  );
}
);

export default Order;
