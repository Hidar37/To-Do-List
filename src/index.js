import './style.css';

const ulElement = document.getElementById('nav');
const toDoList = [
  {
    description: 'wash the deshies Haider',
    completed: false,
    index: 0,
  },
  {
    description: 'wash the deshies Haider',
    completed: false,
    index: 1,
  },
  {
    description: 'wash the deshies Haider',
    completed: false,
    index: 2,
  },
];

const showToDoList = () => {
  toDoList.forEach((item, position) => {
    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'nav-item');
    const checkboxElement = document.createElement('input');
    checkboxElement.setAttribute('type', 'checkbox');
    checkboxElement.setAttribute('id', 'index'.concat(position));
    const pElement = document.createElement('p');
    const removeBtn = document.createElement('i');
    removeBtn.setAttribute('class', 'change-position');
    removeBtn.classList.add('fa-solid', 'fa-ellipsis-vertical');
    // Adding textNode to Elements
    pElement.appendChild(document.createTextNode(`${item.description}`));
    // remove Button
    removeBtn.addEventListener('click', () => {
      toDoList.splice(position, 1);
      liElement.remove();
      window.location.reload();
    });
    // 1- Append New Element to Parent node which is li.
    // 2- Than append the li to ul.
    liElement.append(checkboxElement, pElement, removeBtn);
    ulElement.appendChild(liElement);
  });
};

showToDoList();