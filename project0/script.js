const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
let id = 0;

let todos = [];

function newTodo() {

    // increment item-count
    incrementItemCount();

    // increment unchecked-count
    incrementUncheckedCount();

    // add li for new todo
    addNewTodo();
}

function addNewTodo() {

    // add li for new todo
    let ul = document.getElementById('todo-list');
    let li = document.createElement('li');
    li.setAttribute('id', id++);
    // li.appendChild(document.createTextNode("new todo " + id));

    // add a checkbox next to li
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = 'value';
    checkbox.id = 'id';

    // add the checkbox and todo item to ul
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode("new todo " + id));
    ul.appendChild(li);
}

function addCheckbox() {

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = 'value';
    checkbox.id = 'id';
    li.appendChild(checkbox);
}

function incrementItemCount() {

    // increment item-count
    document.getElementById('item-count').innerText++;
}

function incrementUncheckedCount(){

    // increment unchecked-count
    document.getElementById('unchecked-count').innerText++;
}

function checkboxHandler(){

    // increment unchecked-count
    let unchecked = document.getElementById('unchecked-count');

}