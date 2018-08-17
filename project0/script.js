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

    li.appendChild(checkbox);
    li.appendChild(todoText);

    let ul = document.getElementById('todo-list');
    ul.appendChild(li);

    // increment item-count
    incrementItemCount();

    // increment unchecked-count
    incrementUncheckedCount();

    // fires handler when checkboxed checked or unchecked
    checkbox.onchange = checkboxHandler;


    // classNames.TODO_ITEM = classNames.TODO_CHECKBOX + classNames.TODO_TEXT;
    //
    // todos.push(classNames.TODO_ITEM);
    //
    // // add the checkbox and todo item to ul
    // for(todo in todos){
    //     console.log("55. " + classNames.TODO_ITEM);
    // }
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