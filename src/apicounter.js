import API_URL from './constant.js';

const displaycount = document.querySelector('.count');
const counter = async () => {
  const fetchData = await fetch(API_URL);
  const data = await fetchData.json();
  const count = data.length;
  displaycount.innerHTML = `(${count})`;
};

export default counter;
