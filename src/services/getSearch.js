
const API_KEY = '38887202-a6778fad9111f44c566d860bc'; // Особистий ключ
const BASE_URL = 'https://pixabay.com/api/';
const IMG_ON_PAGE = 12;

// Функція для отримання пошуку
export const getSearch = (searchText, page) => {
  // Параметри для запиту
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page:IMG_ON_PAGE,
  });

  return fetch(`${BASE_URL}?${params}`);
};



// export const get = searchText => {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '38887202-a6778fad9111f44c566d860bc';
//    return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchText}&per_page=12`)
    
// };
