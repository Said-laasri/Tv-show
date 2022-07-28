import API_URL from './constant.js';

/** ***reservation API link ****** */
export const reservationAPIlink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2NLqYBO19Fcoktw8xmgq/reservations/';

/** ***Display data using API*** */
export const displayReservation = (item_id) => {
  const movieImg = document.createElement('img');
  const movieTitle = document.createElement('h2');
  const reservation = document.querySelector('.reservation');
  const reservationCard = document.createElement('div');
  reservationCard.classList.add('modal-container');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  reservationCard.appendChild(modal);
  const btn = document.createElement('button');
  btn.classList.add('close');
  btn.addEventListener('click', () => {
    reservationCard.classList.add('hide');
  });
  modal.appendChild(btn);

  fetch(API_URL).then((res) => res.json()).then((data) => {
    const selected = data.filter((item) => item.id === +item_id)[0];
    movieImg.src = selected.image.medium;
    movieTitle.textContent = selected.name;
  });

  modal.appendChild(movieImg);
  modal.appendChild(movieTitle);
  const url = `${reservationAPIlink}?item_id=${item_id}`;

  const reservationTitle = document.createElement('h3');
  reservationTitle.classList.add('resTitle');
  const ulList = document.createElement('ul');
  ulList.classList.add('resList');
  fetchReservation(url, reservationTitle, ulList);

  modal.appendChild(reservationTitle);
  modal.appendChild(ulList);
  reservation.appendChild(reservationCard);
  const reservationForm = document.querySelector('.reservationForm');
  modal.appendChild(reservationForm);
};

const fetchReservation = (url, reservationTitle, ulList) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        reservationTitle.innerHTML = `Reservation (${countReservations(data)})`;  
        data.forEach((e) => {
          const reservationLi = document.createElement('li');
          reservationLi.innerHTML = `${e.date_start} - ${e.date_end} by ${e.username}`;
          ulList.appendChild(reservationLi);
        });
      }
    });
    return
};


export const countReservations = (data)=> {
  const count = data.length
  return count
}

const userName = document.querySelector('.username');
const startDate = document.querySelector('.startDate');
const endDate = document.querySelector('.endDate');
const reserveBtn = document.querySelector('#reserve');

export const addReservation = (item_id) => {
  reserveBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    if (!userName.value || !endDate.value || !startDate.value) {
      return;
    }

    await fetch(reservationAPIlink, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          item_id,
          username: userName.value,
          date_start: startDate.value,
          date_end: endDate.value,
        },
      ),
    });

    userName.value = '';
    startDate.value = '';
    endDate.value = '';

    const url = `${reservationAPIlink}?item_id=${item_id}`;
    const uList = document.querySelector('.resList');
    uList.innerHTML = '';
    const uTitle = document.querySelector('.resTitle');

    fetchReservation(url, uTitle, uList);
  });
};
