// eslint-disable-next-line operator-linebreak
const API_LIKES =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dZgTTlr5uztQNogDJTyt/likes';

const getLikes = () => {
  fetch(API_LIKES)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((like) => {
        const likeshow = document.querySelector(`.likeheart-${like.item_id}`);
        likeshow.innerHTML = `${like.likes}`;
      });
    });
};

export default getLikes;
