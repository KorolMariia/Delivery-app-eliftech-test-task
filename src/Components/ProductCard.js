import { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../state/delivery/deliverySlice';
import { Box, Grid, Card, CardHeader, CardMedia, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductCard = memo(({ product }) => {
  const { uri, image, label, totalWeight } = product;
  const dispatch = useDispatch();
  const productsInCart = useSelector(({ delivery }) => delivery.productsInCart);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInCart(productsInCart.some((productInCart) => productInCart.uri === uri));
  }, [productsInCart, uri]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setInCart(!inCart);
  }

  return (
    <Grid key={uri} item xs={12} sm={8} md={6} lg={4}>
      <Card variant="outlined" sx={{ display: 'flex', height: '220px' }}>
        <CardMedia
          component="img"
          image={image}
          alt={label}
          sx={{ height: '220px', width: '150px' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
          <CardHeader
            title={label}
            subheader={`Price: ${totalWeight.toFixed(2)}`}
          />
          <CardActions disableSpacing sx={{ alignSelf: 'flex-end' }}>
            <IconButton aria-label="add to cart" onClick={handleAddToCart}>
              {inCart ? <ShoppingCartIcon sx={{ color: '#ce0030' }} /> : <ShoppingCartOutlinedIcon />}
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
}
);

export default ProductCard;