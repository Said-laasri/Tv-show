const displaycount = document.querySelector('.count');
const countElement = () => {
  const tvShows = document.querySelectorAll('.show-container');
  let count = 0;
  for (let i = 0; i < tvShows.length; i += 1) {
    count += 1;
  }
  const showCount = `(${count})`;
  displaycount.innerHTML = showCount;
};

export default countElement;
