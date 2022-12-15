import ToDoList from './toDoListFunctionlity.js';
import { ulElement } from './values.js';

const myList = new ToDoList(ulElement);

// Check if we item is added to DOM or Not
const checkLiInDOM = (liQuery) => {
  if (liQuery.length > 0) {
    return liQuery;
  }
  return -1;
};
// =========================================== Adding Item
// [ DOM MOCK ]
describe('Adding: ', () => {
  document.body.innerHTML = `<div class="task-wrapper">
  <form action="" method="GET" id="task-form">
    <div class="underline">
      <input type="text" id="task" required placeholder="Add to your list...">
      <button type="submit" id="enter-btn" class="btn"><i class="fa-solid fa-arrow-left-long change-color"></i></button>
    </div>
  </form>
  <ul class="nav" id="nav">
    
  </ul>
  <button id="clear" class="btn">Clear all completed</button>
</div>`;

  test('Item Added to LocalStorage, Array and DOM', () => {
    expect(myList.addItemToList('Omar')).toHaveLength(1); // index -> 0
    expect(myList.addItemToList('Haider')).toHaveLength(2); // index -> 1
    expect(checkLiInDOM(document.querySelectorAll('li'))).toHaveLength(2);
  });
});
// ======================================= Removing Item
describe('Removing:', () => {
  const toDoList = [];
  const removeBtn = document.createElement('i');
  removeBtn.setAttribute('class', 'change-position');
  removeBtn.classList.add('fa-solid', 'fa-trash-can');
  test('Item Removed from LocalStorage, Array and DOM', () => {
    expect(myList.addItemToList('O.')).toHaveLength(3);
    expect(myList.addItemToList('S.')).toHaveLength(4);
    expect(myList.addItemToList('H.')).toHaveLength(5);
    expect(myList.removeItemTest(toDoList, removeBtn, 4, document.getElementById('id4'))).toHaveLength(4);
    expect(myList.removeItemTest(toDoList, removeBtn, 2, document.getElementById('id2'))).toHaveLength(3);
    expect(checkLiInDOM(document.querySelectorAll('li'))).toHaveLength(3);
  });
});
// ======================================= Updateing Item
describe('Update: ', () => {
  test('Item Updated', () => {
    const pElement = document.getElementById('text-input-style-1');
    let pElementValue = pElement.value;
    let newItem = {
      description: pElementValue,
      completed: false,
      index: 1,
    };
    expect(myList.editeInputTextTest(pElement, 'Osman', newItem, 1)).toMatch('Osman'); // change Haider to Osman

    const pElemen1 = document.getElementById('text-input-style-0');
    pElementValue = pElemen1.value;
    newItem = {
      description: pElementValue,
      completed: false,
      index: 0,
    };
    expect(myList.editeInputTextTest(pElemen1, 'Tawfiq', newItem, 0)).toMatch('Tawfiq'); // Change Omar to Tawfiq
  });
});
// ======================================= Checkbox Event [True/False]
describe('Update Complete Status: ', () => {
  test('Status Updated', () => {
    const checkboxElement = document.getElementById('index1');
    const pElement = document.getElementById('text-input-style-1');
    const pElementValue = pElement.value;
    const newItem = {
      description: pElementValue,
      completed: false,
      index: 1,
    };
    expect(myList.checkBoxStatusEventTest(newItem, checkboxElement, pElement, 1)).toBeTruthy();

    const checkboxElement1 = document.getElementById('index0');
    const pElement1 = document.getElementById('text-input-style-0');
    const pElementValue1 = pElement1.value;
    const newItem1 = {
      description: pElementValue1,
      completed: false,
      index: 0,
    };
    expect(myList.checkBoxStatusEventTest(newItem1, checkboxElement1, pElement1, 0)).toBeTruthy();
    expect(myList.checkBoxStatusEventTest(newItem, checkboxElement, pElement, 1)).toBeFalsy();
  });
});
// =========================================== Clear All Functionality Test Cases.
describe('Clear All functionality: ', () => {
  test('items cleared from list.', () => {
    expect(myList.clearCompletedTasksTest()).toHaveLength(2);
  });
});