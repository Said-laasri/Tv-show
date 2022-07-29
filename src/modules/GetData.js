import API_URL from './constant.js';
import display from './display.js';

const renderAPI = async () => {
  const fetchData = await fetch(API_URL);
  const data = await fetchData.json();
  display(data);
};

export default renderAPI;
