export default class Difference {
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;
  }

  bindTriggers(officer, items, counter) {
    officer.querySelector('.plus').addEventListener('click', () => {
      if (counter <= items.length - 2) {
        items.forEach(i => i.classList.add('animated'));

        items[counter].style.display = 'flex';
        items[counter].classList.add('slideInDown');
        items[items.length - 1].classList.add('slideInDown');
        counter++;
      }

      if (counter === items.length - 1) {
        items[counter].style.display = 'none';
      }
    });
  }

  hideItems(itemsList) {
    itemsList.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }

  init() {
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);
    this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
  }
}