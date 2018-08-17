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

// increment or decrement unchecked-count
// let uncheckedCount = document.getElementById('unchecked-count').innerText
uncheckedCount = uncheckedCountSpan;

function newTodo() {

    // add li for new todo
    let li = document.createElement('li');
    li.className = classNames.TODO_ITEM;

    // add a checkbox next to li
    var checkbox = document.createElement('input');
    checkbox.className = classNames.TODO_CHECKBOX;
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.setAttribute('id', ++id);

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
    uncheckedCount.innerText++;
    // incrementUncheckedCount();
    // uncheckedCount = document.getElementById('unchecked-count').innerText;

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
    // document.getElementById('unchecked-count').innerText++;
    uncheckedCount.innerText++;
}


function decrementUncheckedCount(){

    // decrement unchecked-count
    // document.getElementById('unchecked-count').innerText--;
    uncheckedCount.innerText--;
}


function checkboxHandler() {

    console.log("83. uncheckedCount == " + uncheckedCount.innerText);

    let el = document.getElementById(id);
    console.log("93. id == " + this.id);

    let itemCount = document.getElementById('item-count').innerText;
    for (let i = 1; i <= itemCount; i++) {
        if(document.getElementById(i).checked == true){
            console.log("91. " + i + " checked!");
        }
    }

    if(uncheckedCount.innerText <= 0){
        // incrementUncheckedCount();
        // document.getElementById('unchecked-count').innerText++;
        uncheckedCount.innerText++;
        console.log("88. incrementing uncheckedCount == " + uncheckedCount.innerText);
    } else {
        // decrementUncheckedCount();
        // document.getElementById('unchecked-count').innerText--;
        uncheckedCount.innerText--;
        console.log("92. decrementing uncheckedCount == " + uncheckedCount.innerText);
    }

}