import './CSS/styles.css';
import './CSS/reservation.css';
import './CSS/comment.css';
import renderAPI from './modules/GetData.js';
import './assets/img/logo.png';
import uploadLikes from './modules/post.js';
import getLikes from './modules/gitlikes.js';
import countElement from './modules/apicounter.js';

window.onload = () => {
  renderAPI();
  uploadLikes();
  getLikes();
};

setTimeout(() => {
  countElement();
}, 4000);
