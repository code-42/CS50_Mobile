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

    // increment item-count
    document.getElementById('item-count').innerText++;

    // add li for new todo
    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.setAttribute('id', id++);

    // add a checkbox next to li
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = 'value';
    checkbox.id = 'id';

    // add the checkbox and todo item to ul
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode("new todo " + id));
    ul.appendChild(li);

}

