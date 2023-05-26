import axios from "axios";
import { APP_ID_SEARCH, APP_KEY_SEARCH } from '../config';

const apiAccessSearch = {
  app_id: APP_ID_SEARCH,
  app_key: APP_KEY_SEARCH,
};

const apiDelivery = axios.create({
  baseURL: 'https://server-json-korol-mariia.vercel.app',
});

const edamamAxios = axios.create({
  baseURL: 'https://api.edamam.com',
});

export const fetchShops = async () => {
  try {
    const { data } = await apiDelivery.get('/shops');
    return data.shops;
  }
  catch (error) {
    console.log(error);
  };
}

export const fetchShopProducts = async (selectedShop) => {
  try {
    const { data } = await edamamAxios.get(`/search?q=${selectedShop}`, {
      params: {
        from: 11,
        to: 23,
        ...apiAccessSearch,
      },
    });
    return data.hits;
  }
  catch (error) {
    console.log(error);
  };
}

