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
                                <p class="description">${item.summary}</p>
                                <button class="comment">Comment</button>
                                <button class="reservation">Reservation</button> `;

    shows.appendChild(showcontainer);
  });
};

export default display;