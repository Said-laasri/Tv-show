import API_URL from './constant.js';

/** ***comment API link ****** */
export const commentAPIlink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2NLqYBO19Fcoktw8xmgq/comments/';

export const countComments = (data) => {
  const count = data.length;
  return count;
};

const fetchComment = (url, commentTitle, ulList) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        commentTitle.innerHTML = `Reservation (${countComments(data)})`;
        data.forEach((e) => {
          const commentLi = document.createElement('li');
          commentLi.innerHTML = `${e.creation_date}  ${e.username} : ${e.comment}`;
          ulList.appendChild(commentLi);
        });
      }
    });
};

/** ***Display data using API*** */
export const displayComment = (item_id) => {
  const movieImg = document.createElement('img');
  const movieTitle = document.createElement('h2');
  const comment = document.querySelector('.comment-div');
  const commentModal = document.createElement('div');
  commentModal.classList.add('modal-container');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  commentModal.appendChild(modal);
  const btn = document.createElement('button');
  btn.classList.add('close');
  btn.addEventListener('click', () => {
    commentModal.classList.add('hide');
  });
  modal.appendChild(btn);

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const selected = data.filter((item) => item.id === +item_id)[0];
      movieImg.src = selected.image.medium;
      movieTitle.textContent = selected.name;
    });

  modal.appendChild(movieImg);
  modal.appendChild(movieTitle);
  const url = `${commentAPIlink}?item_id=${item_id}`;

  const commentTitle = document.createElement('h3');
  commentTitle.classList.add('comment-Title');
  const ulList = document.createElement('ul');
  ulList.classList.add('comment-List');
  fetchComment(url, commentTitle, ulList);

  modal.appendChild(commentTitle);
  modal.appendChild(ulList);
  comment.append(commentModal);
  const commentForm = document.querySelector('.comment-form');
  modal.appendChild(commentForm);
};

const userName = document.querySelector('.commenter');
const commentInput = document.querySelector('.comment-input');
const commentBtn = document.querySelector('#submit-comment');

export const addComment = (item_id) => {
  commentBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    if (!userName.value || !commentInput.value) {
      return;
    }

    await fetch(commentAPIlink, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id,
        username: userName.value,
        comment: commentInput.value,
      }),
    });

    userName.value = '';
    commentInput.value = '';

    const url = `${commentAPIlink}?item_id=${item_id}`;
    const uList = document.querySelector('.comment-List');
    uList.innerHTML = '';
    const uTitle = document.querySelector('.comment-Title');

    fetchComment(url, uTitle, uList);
  });
};
