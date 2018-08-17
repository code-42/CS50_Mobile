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

    // add li for new todo
    let li = document.createElement('li');
    li.className = classNames.TODO_ITEM;

    // add a checkbox next to li
    let checkbox = document.createElement('input');
    checkbox.className = classNames.TODO_CHECKBOX;
    checkbox.type = 'checkbox';
    checkbox.id = 'id';

    // declare id then concat to todoItem
    li.setAttribute('id', id++);
    let todoText = li.appendChild(document.createTextNode("new todo " + id));
    todoText.className = classNames.TODO_TEXT;

    // add the checkbox and todo item to ul
    li.appendChild(checkbox);
    li.appendChild(todoText);

    let ul = document.getElementById('todo-list');
    ul.appendChild(li);

    // increment item-count
    incrementItemCount();

    // increment unchecked-count
    incrementUncheckedCount();

    checkbox.onchange = checkboxHandler;
}

function incrementItemCount() {

    // increment item-count
    document.getElementById('item-count').innerText++;
}

function incrementUncheckedCount(){

    // increment unchecked-count
    document.getElementById('unchecked-count').innerText++;
}

function decrementUncheckedCount(){

    // decrement unchecked-count
    document.getElementById('unchecked-count').innerText--;
}

var uncheckedCount;
function checkboxHandler(){

    // increment or decrement unchecked-count
    uncheckedCount = document.getElementById('unchecked-count').innerText;
    console.log(uncheckedCount);
    if(uncheckedCount <= 0){
        incrementUncheckedCount();
    } else {
        decrementUncheckedCount();
    }

}