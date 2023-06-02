import { memo } from 'react';
import SearchLine from './SerachLine';
import HistoryOrders from './HistoryOrders';
import { Typography } from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const History = memo(() => (
  <>
    <Typography variant="subtitle1">
      Your orders <FavoriteOutlinedIcon />
    </Typography>
    <SearchLine />
    <HistoryOrders />
  </>
)
);

export default History;