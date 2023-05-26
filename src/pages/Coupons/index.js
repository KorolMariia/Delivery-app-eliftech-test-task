import { memo, useState } from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Typography, Box, Card, CardHeader, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const Coupons = memo(() => {
  const [couponCode,] = useState('COUPONCODE123');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(couponCode);
    setIsCopied(true);
  };

  return (
    <>
      <Typography variant="subtitle1">
        Use coupon code <FavoriteOutlinedIcon />
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card variant="outlined"
          sx={{
            display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', bgcolor: '#fbec5d'
          }} >
          <CardHeader
            title='Your discount 15%'
            subheader={couponCode}
          />
          <CardActions disableSpacing sx={{ alignSelf: 'flex-end' }}>
            <IconButton aria-label="Copy coupon code" onClick={handleCopyClick}>
              {isCopied ? (
                <>
                  <Typography variant="subtitle2">
                    Copied! <DoneOutlinedIcon />
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="subtitle2">
                    Copy Coupon <ContentCopyOutlinedIcon />
                  </Typography>
                </>
              )}
            </IconButton>
          </CardActions>
        </Card >
      </Box >
    </>
  );
});

export default Coupons;
