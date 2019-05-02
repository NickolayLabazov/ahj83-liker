import heart from '../img/heart.png';

export default class Liker {
  constructor(parent) {
    this.parent = parent;

    this.mainDiv = null;
    this.form = null;
    this.button = null;
  }

  create() {
    this.mainDiv = document.createElement('div');
    this.form = document.createElement('form');
    this.button = document.createElement('button');
    this.form.appendChild(this.button);
    this.parent.appendChild(this.mainDiv);
    this.mainDiv.appendChild(this.form);
    this.button.setAttribute('class', 'button');
    this.button.innerHTML = 'Like';
    this.mainDiv.setAttribute('class', 'mainDiv');
    this.addListener();
  }

  addListener() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      const like = document.createElement('img');
      like.setAttribute('src', `.${heart}`);
      like.setAttribute('class', 'like');
      const rand = Math.random();
      if (rand < 0.25) {
        like.classList.add('likeI');
      } else if (rand < 0.5) {
        like.classList.add('likeII');
      } else if (rand < 0.75) {
        like.classList.add('likeIII');
      } else if (rand < 1) {
        like.classList.add('likeIV');
      }
      this.mainDiv.appendChild(like);
      like.addEventListener('animationend', () => {
        this.mainDiv.removeChild(like);
      });
    });
  }
}
