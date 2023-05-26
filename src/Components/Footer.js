import { memo } from 'react';
import { Box, Typography } from '@mui/material';

const Footer = memo(() => {
  return (
    <Box component="footer" role='contentinfo'
      sx={{
        bgcolor: '#fbec5d',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography>
        Delivery © 2023 All Rights Reserved.
      </Typography>
    </Box>
  );
});

export default Footer;