import './styles.css';
import renderAPI from './GetData.js';
import './assets/img/logo.png';
import uploadLikes from './post.js';
import getLikes from './gitlikes.js';
import countElement from './apicounter.js';
import './reservation.css';
import './comment.css';

window.onload = () => {
  renderAPI();
  uploadLikes();
  getLikes();
};

setTimeout(() => {
  countElement();
}, 3000);
