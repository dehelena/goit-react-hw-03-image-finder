import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/';
const pixabayKey = '33097272-5cfe3e3a455a7cd5afa001a4b';

export const requestImages = async searchWord => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${searchWord}&page=1&key=${pixabayKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;

  // return fetch(
  //   `https://pixabay.com/api/?q=${searchWord}&page=1&key=33097272-5cfe3e3a455a7cd5afa001a4b&image_type=photo&orientation=horizontal&per_page=12`
  // ).then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   return Promise.reject(new Error(`Sorry no images for ${searchWord}`));
  // });
};
