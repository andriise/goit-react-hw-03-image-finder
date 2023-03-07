import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '11497081-cc65ac3ee2055db377a22cee7';

export async function getPhotos(query, page) {
  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(response.data);
  return response.data
}
