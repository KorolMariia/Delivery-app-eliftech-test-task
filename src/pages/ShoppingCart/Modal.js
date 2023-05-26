import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCustomer, clearProductsInCart } from '../../state/delivery/deliverySlice';
import { Box, Typography, Button, Modal as MuiModal } from '@mui/material';

const Modal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModalClose = () => {
    onClose();
    dispatch(clearProductsInCart());
    dispatch(setCustomer({ name: '', email: '', phone: '', address: '' }));
    navigate('/');
  };

  return (
    <MuiModal open={true} onClose={handleModalClose}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: '#fbec5d', boxShadow: 24, p: 4, display: 'flex',
        flexDirection: 'column', gap: '10px'
      }}>
        <Typography variant="h5" component="div" gutterBottom>
          Order placed successfully!
        </Typography>
        <Button onClick={handleModalClose} variant="contained" sx={{ bgcolor: '#ce0030' }}>Close</Button>
      </Box>
    </MuiModal>
  );
};

export default Modal;