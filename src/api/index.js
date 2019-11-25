import axios from 'axios';
import config from '../config';

const { url } = config;

export const getImages = async (acceptedFiles) => {
  try {
    const data = new FormData();
    data.append('image', acceptedFiles[0]);
    const { data: res } = await axios({
      method: 'post',
      url,
      data,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    });
    return res;
  }
  catch (e) {
    console.log('error', e);
    return {};
  }
};
