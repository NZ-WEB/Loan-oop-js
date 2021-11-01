export default class Accordion {
  constructor(wrapper) {
    this.wrapper = document.querySelectorAll(wrapper);
  }

  bindTriggers() {
    this.wrapper.forEach(wrapper => {
      const addBtn = wrapper.querySelector('.plus');

      addBtn.addEventListener('click', () => {
        const msg = wrapper.parentNode.querySelector('.msg');

        if (msg.style.display === 'block') {
          msg.style.display = 'none';
        } else {
          msg.style.display = 'block';

        }
      });
    })
  }

  init() {
    this.bindTriggers();
  }
}
