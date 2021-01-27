import Config from 'react-native-config';
import axios from 'axios';

export const getBirras = async () => {
  try {
    const data = await axios.get(`${Config.API_URL}/beers`);
    return data.data;
  } catch (error) {
    throw error.response;
  }
};

export const getABirra = async (id) => {
  try {
    const data = await axios.get(`${Config.API_URL}beers/${id}`);
    return data.data;
  } catch (error) {
    return error.response;
  }
};
