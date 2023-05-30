import { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShop, getShops } from '../../state/delivery/deliverySlice';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const Shops = memo(() => {
  const dispatch = useDispatch();
  const shops = useSelector(({ delivery }) => delivery.shops);
  const selectedShop = useSelector(({ delivery }) => delivery.selectedShop);
  const productsInCart = useSelector(({ delivery }) => delivery.productsInCart);

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  const handleShopClick = (shop) => {
    if (productsInCart.length === 0) {
      dispatch(setShop(shop.toLowerCase()));
    }
  };

  return (
    <List
      sx={{ bgcolor: 'background.paper', paddingRight: '50px' }}
      aria-label="shops"
    >
      {shops.map((shop) => (
        <ListItem disablePadding
          key={shop}
          className={
            selectedShop === shop.toLowerCase() ? 'active' : ''
          }
          onClick={() => handleShopClick(shop)}
          sx={{
            border: '1px solid #808080', borderRadius: '10px', mb: 1,
            ...(selectedShop === shop.toLowerCase() && { bgcolor: '#fbec5d' }),
            ...(productsInCart.length > 0 && selectedShop !== shop.toLowerCase() && { opacity: 0.5 })
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <MenuBookOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={shop} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
});

export default Shops;
