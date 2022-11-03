import { toDoText, ulElement } from './values.js';

export default class ToDoList {
  constructor(parentUl) {
    this.toDoListArray = [];
    this.parentUl = parentUl;
  }

  setBookList = () => {
    this.toDoListArray = JSON.parse(localStorage.getItem('toDoListItems'));
    return this.toDoListArray;
  }

  addItemToList = (getToDoText) => {
    const newItem = {
      description: getToDoText,
      completed: false,
      index: this.toDoListArray.length,
    };
    this.toDoListArray.push(newItem);
    this.listLenght += 1;
    // Add to local Storage
    localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
    // Empty input
    toDoText.value = '';
    ulElement.innerHTML = '';
    this.showToDoList();
  }

  removeItem = (arrayDoToList, btnAddress, itemIndexPosition, liAddress) => {
    // Use to create event Listener for each passen btn.
    btnAddress.addEventListener('click', () => {
      this.toDoListArray.splice(itemIndexPosition, 1);
      arrayDoToList.forEach((element, elementIndex) => {
        element.index = elementIndex;
      });
      localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
      liAddress.remove();
      window.location.reload();
    });
  }

  showToDoList = () => {
    // Transfer All data from local Storage to [toDoListArray]
    this.toDoListArray = JSON.parse(localStorage.getItem('toDoListItems'));
    // Use to loop through given array and display all the item which is avilibly in given array.
    this.toDoListArray.forEach((item, indexPosition) => {
      const liElement = document.createElement('li');
      liElement.setAttribute('class', 'nav-item');
      const checkboxElement = document.createElement('input');
      checkboxElement.setAttribute('type', 'checkbox');
      checkboxElement.setAttribute('id', 'index'.concat(indexPosition));
      const pElement = document.createElement('p');
      const removeBtn = document.createElement('i');
      removeBtn.setAttribute('class', 'change-position');
      removeBtn.classList.add('fa-solid', 'fa-ellipsis-vertical');
      // Adding textNode to Elements
      pElement.appendChild(document.createTextNode(`${item.description}`));
      // remove Button
      this.removeItem(this.toDoListArray, removeBtn, indexPosition, liElement);
      // 1- Append New Element to Parent node which is li.
      // 2- Append the li to ul.
      liElement.append(checkboxElement, pElement, removeBtn);
      this.parentUl.appendChild(liElement);
    });
  };
}