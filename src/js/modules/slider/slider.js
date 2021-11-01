export default class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    prevList = null,
    nextList = null,
    activeClass = '',
    animate = false,
    autoplay = false,
  } = {}) {
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (e) {}
    this.buttons = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.prevList = document.querySelectorAll(prevList);
    this.nextList = document.querySelectorAll(nextList);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}
