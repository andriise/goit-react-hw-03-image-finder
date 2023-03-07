import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '11497081-cc65ac3ee2055db377a22cee7';

export const getPhotos = (query, page, imageType, orientation, perPage) => {
  return axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`
  );
};
