import { clearBtn } from './values.js';

export default class ToDoList {
  constructor(parentUl) {
    this.toDoListArray = [];
    this.parentUl = parentUl;
  }

  setBookList = () => {
    this.toDoListArray = JSON.parse(localStorage.getItem('toDoListItems'));
    return this.toDoListArray;
  };

<<<<<<< HEAD
  addItemToList = (getToDoText) => {
    const ulElement = document.getElementById('nav');
    const myForm = document.getElementById('task-form');
    const newItem = {
      description: getToDoText,
      completed: false,
      index: this.toDoListArray.length,
=======
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

    showToDoList = () => {
      // Transfer All data from local Storage to [toDoListArray]
      this.toDoListArray = JSON.parse(localStorage.getItem('toDoListItems'));

      // Use to loop through given array and display all the item which is avilibly in given array.
      this.toDoListArray.forEach((item, indexPosition) => {
        const liElement = document.createElement('li');
        liElement.setAttribute('class', 'nav-item');
        liElement.setAttribute('id', 'id'.concat(item.index));
        const checkboxElement = document.createElement('input');
        checkboxElement.setAttribute('type', 'checkbox');
        checkboxElement.setAttribute('id', 'index'.concat(indexPosition));
        const pElement = document.createElement('input');
        pElement.setAttribute('type', 'text');
        pElement.setAttribute('id', 'text-input-style');
        const removeBtn = document.createElement('i');
        removeBtn.setAttribute('class', 'change-position');
        removeBtn.classList.add('fa-solid', 'fa-trash-can');
        // Setting the value of input
        pElement.setAttribute('value', item.description);
        // Updateing the Description.
        this.editeInputText(pElement, item);
        // Calling this function on load
        this.checkBoxStatusOnLoad(item, checkboxElement, pElement);
        // Adding event to checkbox
        this.checkBoxStatusEvent(item, checkboxElement, pElement);
        // remove Button
        this.removeItem(this.toDoListArray, removeBtn, indexPosition, liElement);
        // 1- Append New Element to Parent node which is li.
        // 2- Append the li to ul.
        liElement.append(checkboxElement, pElement, removeBtn);
        this.parentUl.appendChild(liElement);
      });
>>>>>>> efec7160d2bfd0c3c39813a94c0ea0f00b9bf2bd
    };
    this.toDoListArray.push(newItem);
    this.listLenght += 1;
    // Add to local Storage
    localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
    // Empty input
    myForm.reset();
    ulElement.innerHTML = '';
    this.showToDoList();
    return this.toDoListArray;
  };

  showToDoList = () => {
    const parentUl = document.getElementById('nav');
    // Transfer All data from local Storage to [toDoListArray]
    this.toDoListArray = JSON.parse(localStorage.getItem('toDoListItems'));
    // Use to loop through given array and display all the item which is avilibly in given array.
    this.toDoListArray.forEach((item, indexPosition) => {
      const liElement = document.createElement('li');
      liElement.setAttribute('class', 'nav-item');
      liElement.setAttribute('id', 'id'.concat(item.index));
      const checkboxElement = document.createElement('input');
      checkboxElement.setAttribute('type', 'checkbox');
      checkboxElement.setAttribute('id', 'index'.concat(indexPosition));
      const pElement = document.createElement('input');
      pElement.setAttribute('type', 'text');
      pElement.setAttribute('id', 'text-input-style-'.concat(indexPosition));
      pElement.setAttribute('class', 'unique');
      const removeBtn = document.createElement('i');
      removeBtn.setAttribute('class', 'change-position');
      removeBtn.classList.add('fa-solid', 'fa-trash-can');
      // Setting the value of input
      pElement.setAttribute('value', item.description);
      // Updateing the Description.
      this.editeInputText(pElement, item);
      // Calling this function on load
      this.checkBoxStatusOnLoad(item, checkboxElement, pElement);
      // Adding event to checkbox
      this.checkBoxStatusEvent(item, checkboxElement, pElement);
      // remove Button
      this.removeItem(this.toDoListArray, removeBtn, indexPosition, liElement);
      // 1- Append New Element to Parent node which is li.
      // 2- Append the li to ul.
      liElement.append(checkboxElement, pElement, removeBtn);
      parentUl.appendChild(liElement);
    });
  };

  editeInputTextTest = (
    inputTextAddress,
    inputTextValue,
    arrayDescription,
    elementIndexs,
  ) => {
    if (inputTextAddress.value !== '') {
      arrayDescription.description = inputTextValue;
      inputTextAddress.value = inputTextValue;
      this.toDoListArray[elementIndexs] = arrayDescription;
      localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
    } else {
      inputTextAddress.value = arrayDescription.description;
    }
    return inputTextAddress.value;
  };

  checkBoxStatusOnLoad = (
    updateStatusArray,
    checkboxAddress,
    textInputAddress,
  ) => {
    if (updateStatusArray.completed === true) {
      checkboxAddress.setAttribute('class', 'completed-task');
      checkboxAddress.setAttribute('checked', 'checked');
      textInputAddress.style.textDecoration = 'line-through';
      textInputAddress.style.color = '#999';
    } else {
      checkboxAddress.removeAttribute('class');
      checkboxAddress.removeAttribute('checked');
      textInputAddress.style.textDecoration = 'none';
      textInputAddress.style.color = '#000';
      updateStatusArray.completed = false;
    }
  };

  // eslint-disable-next-line max-len
  checkBoxStatusEventTest = (
    updateStatusArray,
    checkboxAddress,
    textInputAddress,
    statusObjAddress,
  ) => {
    if (updateStatusArray.completed === false) {
      checkboxAddress.setAttribute('class', 'completed-task');
      checkboxAddress.setAttribute('checked', 'checked');
      textInputAddress.style.textDecoration = 'line-through';
      textInputAddress.style.color = '#999';
      updateStatusArray.completed = true;
      this.toDoListArray[statusObjAddress] = updateStatusArray;
      localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
      return updateStatusArray.completed;
    }
    checkboxAddress.removeAttribute('checked');
    checkboxAddress.removeAttribute('class');
    textInputAddress.style.textDecoration = 'none';
    textInputAddress.style.color = '#000';
    updateStatusArray.completed = false;
    this.toDoListArray[statusObjAddress] = updateStatusArray;
    localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
    return updateStatusArray.completed;
  };

  removeItemTest = (
    arrayDoToList,
    btnAddress,
    itemIndexPosition,
    liAddress,
  ) => {
    // Use to create event Listener for each passen btn.
    this.toDoListArray.splice(itemIndexPosition, 1);
    // reassigne index to array items
    arrayDoToList.forEach((element, elementIndex) => {
      element.index = elementIndex;
    });
    localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
    liAddress.remove();
    return this.toDoListArray;
  };

  clearCompletedTasksTest = () => {
    const ulElement = document.getElementById('nav');
    this.toDoListArray = this.toDoListArray.filter((filterItem) => {
      let flag;
      if (filterItem.completed === false) {
        flag = filterItem;
        // reassigne index to array items
        this.toDoListArray.forEach((element, elementIndex) => {
          element.index = elementIndex;
        });
      }
      return flag;
    });
    localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
    ulElement.innerHTML = '';
    this.showToDoList();
    return this.toDoListArray;
  };

  removeItem = (arrayDoToList, btnAddress, itemIndexPosition, liAddress) => {
    // Use to create event Listener for each passen btn.
    btnAddress.addEventListener('click', () => {
      this.toDoListArray.splice(itemIndexPosition, 1);
      // reassigne index to array items
      arrayDoToList.forEach((element, elementIndex) => {
        element.index = elementIndex;
      });
      localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
      liAddress.remove();
      window.location.reload();
    });
  };

  editeInputText = (inputTextAddress, arrayDescription) => {
    inputTextAddress.addEventListener('focusout', () => {
      if (inputTextAddress.value !== '') {
        arrayDescription.description = inputTextAddress.value;
        localStorage.setItem(
          'toDoListItems',
          JSON.stringify(this.toDoListArray),
        );
      } else {
        inputTextAddress.value = arrayDescription.description;
      }
    });
  };

  checkBoxStatusEvent = (
    updateStatusArray,
    checkboxAddress,
    textInputAddress,
  ) => {
    checkboxAddress.addEventListener('change', () => {
      if (updateStatusArray.completed === false) {
        checkboxAddress.setAttribute('class', 'completed-task');
        checkboxAddress.setAttribute('checked', 'checked');
        textInputAddress.style.textDecoration = 'line-through';
        textInputAddress.style.color = '#999';
        updateStatusArray.completed = true;
        localStorage.setItem(
          'toDoListItems',
          JSON.stringify(this.toDoListArray),
        );
      } else {
        checkboxAddress.removeAttribute('checked');
        checkboxAddress.removeAttribute('class');
        textInputAddress.style.textDecoration = 'none';
        textInputAddress.style.color = '#000';
        updateStatusArray.completed = false;
        localStorage.setItem(
          'toDoListItems',
          JSON.stringify(this.toDoListArray),
        );
      }
    });
  };

  clearCompletedTasks = () => {
    clearBtn.addEventListener('click', () => {
      this.toDoListArray = this.toDoListArray.filter((filterItem) => {
        let flag;
        if (filterItem.completed === false) {
          flag = filterItem;
          // reassigne index to array items
          this.toDoListArray.forEach((element, elementIndex) => {
            element.index = elementIndex;
          });
        }
        return flag;
      });
      localStorage.setItem('toDoListItems', JSON.stringify(this.toDoListArray));
      this.parentUl.innerHTML = '';
      this.showToDoList();
    });
  };
}
