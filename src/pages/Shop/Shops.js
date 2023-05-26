import { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShop, getShops } from '../../state/delivery/deliverySlice';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const Shops = memo(() => {
  const dispatch = useDispatch();
  const shops = useSelector(({ delivery }) => delivery.shops);
  const selectedShop = useSelector(({ delivery }) => delivery.selectedShop);

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

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
          onClick={() => dispatch(setShop(shop.toLowerCase()))}
          sx={{ border: '1px solid #808080', borderRadius: '10px', mb: 1, ...(selectedShop === shop.toLowerCase() && { bgcolor: '#fbec5d' }) }}
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
