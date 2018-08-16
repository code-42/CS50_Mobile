const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
var id = 0;

function newTodo() {
  // alert('New TODO button clicked!')
    // increment item count
    document.getElementById('item-count').innerText++;

    // add li for new todo
    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode("new todo"));
    li.setAttribute('id', id++);
    ul.appendChild(li);

}

