import axios from 'axios';

const ACCESS_KEY = 'eWnxUZhgR7yyZ1KEbw0XFXL8m8xm4DgEgMPwz5ehulI';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
