import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const NotFound = () => (
  <>
    <Typography variant="subtitle1">
      Page not found <FavoriteOutlinedIcon />
    </Typography>
    <Link to="/" className="button">
      Back to shop
    </Link>
  </>
);

export default NotFound;