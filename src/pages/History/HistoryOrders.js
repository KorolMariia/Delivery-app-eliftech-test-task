import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, CardMedia, CardHeader, Typography } from '@mui/material';

const HistoryOrders = memo(() => {
  const orders = useSelector((state) => state.delivery.orders);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {orders.map((order, index) => {
        const { id, customer, productsInCart, totalCost } = order;
        return (
          <Card key={index} variant="outlined" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', padding: '20px', gap: '10px' }}>
            <Typography variant="h5" component="div">
              Order ID: {id}
            </Typography>
            <Box>
              <Typography variant="h5" component="div">
                Customer:
              </Typography>
              <Typography variant="body1" gutterBottom>
                Name: {customer.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Address: {customer.address}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: {customer.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: {customer.phone}
              </Typography>
              <Typography variant="h6" gutterBottom>
                TotalCost: {totalCost}
              </Typography>
            </Box>
            <Box sx={{ maxHeight: '30vh', overflow: 'auto', padding: '10px' }}>
              {productsInCart.map((product, index) => {
                const { image, label, totalWeight } = product.product;
                return (
                  <Card key={index} variant="outlined" sx={{ display: 'flex', height: '150px' }}>
                    <CardMedia
                      component="img"
                      image={image}
                      alt={label}
                      sx={{ width: '150px' }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardHeader
                        title={label}
                        subheader={`Price: ${totalWeight.toFixed(2)}`}
                      />
                      <Typography variant="body1">Quantity in order: {product.quantity}</Typography>
                    </Box>
                  </Card>
                )
              })}
            </Box>
          </Card>
        )
      })}
    </Box>
  )
});

export default HistoryOrders;