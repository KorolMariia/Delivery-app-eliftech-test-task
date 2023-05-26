import { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShopProducts } from '../../state/delivery/deliverySlice';
import Loader from '../../Components/Loader';
import ProductCard from '../../Components/ProductCard';
import { Box, Grid } from '@mui/material';

const ShopProducts = memo(() => {
  const dispatch = useDispatch();
  const loading = useSelector(({ delivery }) => delivery.loading);
  const error = useSelector(({ delivery }) => delivery.error);
  const shopProducts = useSelector(({ delivery }) => delivery.shopProducts);
  const selectedShop = useSelector(({ delivery }) => delivery.selectedShop);

  useEffect(() => {
    dispatch(getShopProducts(selectedShop));
  }, [dispatch, selectedShop]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <Box sx={{ maxHeight: '70vh', overflow: 'auto', paddingRight: '10px' }}>
      <Grid container spacing={3} justifyContent='center'>
        {shopProducts.map(({ recipe }) => <ProductCard product={recipe} key={recipe.uri} />)}
      </Grid>
    </Box>
  );
});

export default ShopProducts;
