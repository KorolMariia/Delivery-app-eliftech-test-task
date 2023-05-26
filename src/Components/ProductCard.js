import { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateQuantity } from '../state/delivery/deliverySlice';
import { Box, Typography, Grid, Card, CardHeader, CardMedia, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = memo(({ product, q }) => {
  const dispatch = useDispatch();
  const { uri, image, label, totalWeight } = product;
  const productsInCart = useSelector(({ delivery }) => delivery.productsInCart);
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(q > 1 ? q : 1);

  useEffect(() => {
    setInCart(productsInCart.some((productInCart) => productInCart.product.uri === uri));
  }, [productsInCart, uri]);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    setInCart(!inCart);
  }

  const handleUpdateQuantity = (uri, newQuantity) => {
    dispatch(updateQuantity({ productId: uri, quantity: newQuantity }));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      handleUpdateQuantity(uri, newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        handleUpdateQuantity(uri, newQuantity);
        return newQuantity;
      }
      return prevQuantity;
    });
  };

  return (
    <Grid key={uri} item xs={12} sm={8} md={6} lg={6} >
      <Card variant="outlined" sx={{ display: 'flex', height: '250px' }}>
        <CardMedia
          component="img"
          image={image}
          alt={label}
          sx={{ width: '170px' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardHeader
            title={label}
            subheader={`Price: ${totalWeight.toFixed(2)}`}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <IconButton onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
            <Typography variant="body1">{quantity}</Typography>
            <IconButton onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
          </Box>
          {quantity > 1 ? <Typography variant="subheader">Total price: {(totalWeight * quantity).toFixed(2)}</Typography> : null}
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