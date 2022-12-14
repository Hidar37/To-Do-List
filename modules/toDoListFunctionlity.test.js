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
    expect(myList.addItemToList('Cleaning Car.')).toHaveLength(1);
    expect(myList.addItemToList('Cleaning Car.')).toHaveLength(2);
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