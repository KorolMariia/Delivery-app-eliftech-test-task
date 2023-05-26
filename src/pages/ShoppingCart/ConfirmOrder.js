import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const ConfirmOrder = () => {
  const productsInCart = useSelector(({ delivery }) => delivery.productsInCart);
  const [totalCost, setTotalCost] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [message, setMessage] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'COUPONCODE123' && !couponApplied) {
      setTotalCost(totalCost - (totalCost * 0.15));
      setMessage('Coupon applied successfully!');
      setCouponCode('');
      setCouponApplied(true);
    } else if (couponApplied) {
      setMessage('Coupon already applied!');
      setCouponCode('');
    } else {
      setMessage('Invalid coupon code');
      setCouponCode('');
    }
  };

  useEffect(() => {
    const totalCost = productsInCart.reduce((acc, productInCart) => {
      const { totalWeight } = productInCart.product;
      const quantity = productInCart.quantity;
      const productCost = totalWeight * quantity;
      return acc + productCost;
    }, 0);
    setTotalCost(totalCost)
  }, [productsInCart]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', mt: '10px', position: 'relative' }}>
      <Typography variant="subtitle2" >
        Total Price: {totalCost.toFixed(2)}
      </Typography>
      <div>
        <input type="text" value={couponCode} onChange={handleCouponCodeChange} />
        <button onClick={handleApplyCoupon}>Add coupon</button>
        <p className='coupons'>{message}</p>
      </div>
      <button>Submit</button>
    </Box>
  )
};

export default ConfirmOrder;
