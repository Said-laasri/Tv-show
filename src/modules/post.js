// eslint-disable-next-line operator-linebreak
const API_LIKES =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dZgTTlr5uztQNogDJTyt/likes';

const tvshow = document.querySelector('.tv-shows');

const uploadlikes = () => {
  tvshow.addEventListener('click', (e) => {
    const clicked = e.target.closest('.likeheart');
    if (!clicked) return;
    const item = clicked.getAttribute('id');
    fetch(API_LIKES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify({
        item_id: item,
      }),
    });
    fetch(API_LIKES)
      .then((res) => res.json())
      .then((data) => {
        const datalikes = data.filter((like) => like.item_id === item)[0].likes;
        const likeshow = document.querySelector(`.likeheart-${item}`);
        likeshow.innerHTML = `${datalikes}`;
      });
  });
};
// *******************

// ****************************************************
export default uploadlikes;
