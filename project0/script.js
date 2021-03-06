const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

// need a count variable that can change
let uncheckedCount = uncheckedCountSpan;
let id = 0;

// make object for todos
let todos = {};

function newTodo() {

    // add li for new todo
    let li = document.createElement('li');

    // assigning classNames allows access to css
    li.className = classNames.TODO_ITEM;

    // add a checkbox next to li
    var checkbox = document.createElement('input');
    checkbox.className = classNames.TODO_CHECKBOX;
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.setAttribute('id', id++);

    // declare id then concat to todoItem
    let todoText = document.createElement('span');
    todoText.className = classNames.TODO_TEXT;
    todoText.setAttribute('id', checkbox.id);
    todoText.innerText = ("new todo " + id);

    // add todo items to todos object
    todos.id = id;
    todos.item = todoText;

    // add checkbox and todos item to list item
    li.appendChild(checkbox);
    li.appendChild(todos.item);

    let ul = document.getElementById('todo-list');
    ul.appendChild(li);

    // increment item-count
    incrementItemCount();

    // increment unchecked-count
    incrementUncheckedCount();

    // fires handler when checkbox checked or unchecked
    checkbox.onchange = checkboxHandler;

}


function incrementItemCount() {

    // increment item-count
    document.getElementById('item-count').innerText++;
}

function incrementUncheckedCount(){

    // increment unchecked-count
    uncheckedCount.innerText++;
}

function checkboxHandler() {

    let itemCount = itemCountSpan.innerText;
    let unchecked = 0;
    for (let i = 0; i < itemCount; i++) {
        if(document.getElementById(i).checked === false){
            // counting number of unchecked todos
            unchecked++;
            uncheckedCount.innerText = unchecked.toString();
        } else {
            // all boxes are unchecked
            uncheckedCount.innerText = unchecked.toString();
        }
    }
}