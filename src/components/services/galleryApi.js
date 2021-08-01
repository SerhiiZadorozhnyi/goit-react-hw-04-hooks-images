import axios from 'axios';
const API_KEY = '20826556-19d7dce6dc96816ed1b7dccf7';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const getImage = async (keyword = '', page) => {
  try {
    const { data } = await axios.get('', {
      params: { q: keyword, page: page },
    });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default getImage;