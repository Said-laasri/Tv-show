import './styles.css';
import renderAPI from './GetData.js';
import './assets/img/logo.png';
import uploadLikes from './post.js';
import getLikes from './gitlikes.js';
import counter from './apicounter.js';

window.onload = () => {
  renderAPI();
  uploadLikes();
  getLikes();
  counter();
};
