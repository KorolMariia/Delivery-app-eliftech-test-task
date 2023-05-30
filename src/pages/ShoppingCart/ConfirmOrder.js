import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';
import { setOrders } from '../../state/delivery/deliverySlice';
import { Box, Typography } from '@mui/material';

const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(({ delivery }) => delivery.productsInCart);
  const customer = useSelector(({ delivery }) => delivery.customer);
  const [totalCost, setTotalCost] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [message, setMessage] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'COUPONCODE123' && !couponApplied) {
      setTotalCost(totalCost - (totalCost * 0.15).toFixed(2));
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

  const handleSubmit = () => {
    if (!customer.name || !customer.email || !customer.phone || !customer.address) {
      setErrorMessage('Please fill out all the fields in the form.');
    } else if (productsInCart.length === 0) {
      setErrorMessage('Your cart is empty. Please add some products.');
    } else {
      dispatch(setOrders({ customer: customer, productsInCart: productsInCart, totalCost: totalCost }));
      setShowModal(true);
      setErrorMessage('');
    }
  };

  useEffect(() => {
    const totalCost = productsInCart.reduce((acc, productInCart) => {
      const { totalWeight } = productInCart.product;
      const quantity = productInCart.quantity;
      const productCost = totalWeight * quantity;
      return acc + productCost;
    }, 0);
    setTotalCost(totalCost.toFixed(2))
  }, [productsInCart]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', mt: '10px', position: 'relative' }}>
      <Typography variant="subtitle2" >
        Total Price: {totalCost}
      </Typography>
      <div>
        <input type="text" value={couponCode} onChange={handleCouponCodeChange} />
        <button onClick={handleApplyCoupon}>Add coupon</button>
        <p className='coupons'>{message}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </Box>
  )
};

export default ConfirmOrder;
