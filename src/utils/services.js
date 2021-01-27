import Config from 'react-native-config';

export const getBirras = async () => {
  try {
    const data = await fetch(`${Config.API_URL}/beers`);
    return data.json();
  } catch (error) {
    throw error.response;
  }
};

export const getABirra = async (id) => {
  try {
    const data = await fetch(`${Config.API_URL}beers/${id}`);
    return data.json();
  } catch (error) {
    return error.response;
  }
};
