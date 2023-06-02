import { useState, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterOrders } from '../../state/delivery/deliverySlice';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const SearchLine = memo(() => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    dispatch(filterOrders(searchValue));
  }, [dispatch, searchValue]);

  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <Paper
      component='form'
      sx={{ display: 'flex', alignItems: 'center', width: '50%', position: 'relative', marginBottom: '20px' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Enter Order ID...'
        inputProps={{ 'aria-label': 'search...' }}
        value={searchValue}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
});

export default SearchLine;