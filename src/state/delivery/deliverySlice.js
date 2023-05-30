import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchShops, fetchShopProducts } from '../../api';

export const getShops = createAsyncThunk(
  'delivery/getShops',
  async () => {
    const data = await fetchShops();
    return data;
  },
);

export const getShopProducts = createAsyncThunk(
  'delivery/getShopProducts',
  async (selectedShop) => {
    const data = await fetchShopProducts(selectedShop);
    return data;
  },
);

const initialState = {
  loading: false,
  error: null,
  shops: [],
  selectedShop: JSON.parse(localStorage.getItem('selectedShop')) || 'burgers',
  shopProducts: [],
  productsInCart: JSON.parse(localStorage.getItem('productsInCart')) || [],
  orders: JSON.parse(localStorage.getItem('orders')) || [],
  customer: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setShop: (state, action) => {
      state.selectedShop = action.payload;
      localStorage.setItem('selectedShop', JSON.stringify(state.selectedShop));
    },
    addToCart: (state, action) => {
      state.productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
      const productId = state.productsInCart ? state.productsInCart.map(({ product }) => product.uri) : null;
      productId.includes(action.payload.product.uri) ?
        state.productsInCart = state.productsInCart.filter(
          ({ product }) => product.uri !== action.payload.product.uri)
        : state.productsInCart.push(action.payload);
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const updatedCart = state.productsInCart.map(item => {
        if (item.product.uri === productId) {
          return {
            ...item,
            quantity: quantity
          };
        }
        return item;
      });
      state.productsInCart = updatedCart;
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    },
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = JSON.parse(localStorage.getItem('orders')) || [];
      state.orders.push(action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    clearProductsInCart: (state) => {
      state.productsInCart = [];
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart));
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getShops.pending, (state) => {
        state.loading = true;
        state.shops = [];
        state.error = null;
      })
      .addCase(getShops.fulfilled, (state, action) => {
        state.loading = false;
        state.shops = action.payload;
        state.error = null;
      })
      .addCase(getShops.rejected, (state, action) => {
        state.loading = false;
        state.shops = [];
        state.error = action.payload;
      })
      .addCase(getShopProducts.pending, (state) => {
        state.loading = true;
        state.shopProducts = [];
        state.error = null;
      })
      .addCase(getShopProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.shopProducts = action.payload;
        state.error = null;
      })
      .addCase(getShopProducts.rejected, (state, action) => {
        state.loading = false;
        state.shopProducts = [];
        state.error = action.payload;
      })
  },
});

export const { setShop, addToCart, updateQuantity, setCustomer, setOrders, clearProductsInCart } = deliverySlice.actions;

export default deliverySlice.reducer;