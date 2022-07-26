import { displayReservation, addReservation } from './reservation.js';
import { displayComment, addComment } from './comment.js';

const shows = document.querySelector('.tv-shows');

const display = (show) => {
  show.forEach((item) => {
    const showcontainer = document.createElement('div');
    showcontainer.classList.add('show-container');
    showcontainer.innerHTML = ` <div class="image"> <img src="${item.image.medium}" alt=""/>
                                </div>
                                <div class="info like-${item.id}">
                                <h2 class="title-show">${item.name}</h2>
                                <i id="${item.id}"class="fa-solid fa-heart likeheart likeheart-${item.id}"></i>
                                <span class="likes" id="${item.id}"></span>
                                </div>
                                <p class="season"> season ${item.season} episode ${item.number} </p>
                                <div class="description">${item.summary}</div>
                                <button class="comment" id=${item.id}>Comment</button>
                                <button class="reservationBtn" id=${item.id}>Reservation</button> `;

    shows.appendChild(showcontainer);
  });
  const commentBtn = document.querySelectorAll('.comment');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const clickedId = e.target.id;
      displayComment(clickedId);
      addComment(clickedId);
    });
  });
  const buttons = document.querySelectorAll('.reservationBtn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const clickedId = e.target.id;
      displayReservation(clickedId);
      addReservation(clickedId);
    });
  });
};

export default display;
