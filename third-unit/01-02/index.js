const dataBase = JSON.parse(localStorage.getItem('dataBase')) || []; 

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');

function addTodo () {
    const todoInputValue = document.getElementById('todo-input').value;

    if (isInputEmpty(todoInputValue) || isInputRepeated(todoInputValue)) return;
    
    const currentDate = getCurrentDate();
    creteElement(todoInputValue, currentDate, false);
    
    // Save todo in dataBase
    dataBase.push({
        title: todoInputValue,
        date: currentDate,
        checked: false 
    });
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
}

function creteElement(titleText, dateText, isChecked) {
    const element = document.createElement('li');    

    // Check button
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn');
    checkBtn.checked = isChecked;

    const checkedIcon = document.createElement('span');
    checkedIcon.classList.add('material-symbols-outlined');
    checkedIcon.textContent = "radio_button_unchecked";
    checkBtn.addEventListener('click', () => toggleCheck(checkedIcon, element, checkBtn, title)); // Check button event listener
    
    checkBtn.appendChild(checkedIcon);

    
    // Info container for title and date
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info__container');

    const title = document.createElement('span');
    title.textContent = titleText;
    
    const date = document.createElement('span');
    date.textContent = dateText;
    date.classList.add('text-muted');

    infoContainer.appendChild(title);
    infoContainer.appendChild(date);


    // Delete and Edit buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons__container');
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    const editIcon = document.createElement('span');
    editIcon.classList.add('material-symbols-outlined');
    editIcon.textContent = "edit";
    editBtn.appendChild(editIcon);
    editBtn.addEventListener('click', () => editTodo (element, title, infoContainer)); // Edit button event listener
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('material-symbols-outlined');
    deleteIcon.textContent = "delete";
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener('click', () => deleteTodo (element)); // Delete button event listener
    
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);


    element.appendChild(checkBtn);
    element.appendChild(infoContainer);
    element.appendChild(buttonsContainer);
    todoList.appendChild(element);
}

function isInputEmpty (input) {
    return input === '';
}

function isInputRepeated (input) {
    // Check if the input is already in the dataBase array on the title property
    return dataBase.some(todo => todo.title === input); 
}

function getCurrentDate () {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}

function deleteTodo (element) {
    element.remove();
    dataBase.splice(dataBase.indexOf(element), 1);
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
}

function toggleCheck(checkedIcon, element, checkBtn, title) {
    if (checkedIcon.textContent === "radio_button_unchecked") {
        // Change icon to checked
        checkedIcon.textContent = "radio_button_checked";

        // Add checked class to the element (li)
        element.classList.add('checked'); 

        // Add check-btn--checked class to the button
        checkBtn.classList.add('check-btn--checked'); 

        // Add checked class to the title
        title.classList.add('todo-title--checked'); 
    } else {
        // Change icon to unchecked
        checkedIcon.textContent = "radio_button_unchecked";

        // Remove checked class from the element (li)
        element.classList.remove('checked'); 

        // Remove check-btn--checked class from the button
        checkBtn.classList.remove('check-btn--checked'); 

        // Remove checked class from the title
        title.classList.remove('todo-title--checked'); 
    }
}

function editTodo (element, titleElement, infoContainer) {
    // If the infoContainer contains an input, focus on it and return
    if (infoContainer.querySelector('input') !== null) {
        const containsInput = infoContainer.querySelector('input');
        containsInput.focus();
        return;
    }

    // Create an input element and replace the title span with it
    const editInput = document.createElement('input');
    editInput.textContent = titleElement.textContent;
    editInput.classList.add('todo-title');
    infoContainer.replaceChild(editInput, titleElement);
    editInput.focus();
    
    // When the input loses focus, swap the input for the span and update the dataBase
    editInput.addEventListener('blur', () => updateTitle(element, infoContainer, titleElement, editInput));
    
    // When the user presses enter, swap the input for the span and update the dataBase
    editInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') updateTitle(element, infoContainer, titleElement, editInput);
    });
}

function updateTitle(element, infoContainer, titleElement, editInput) {
    // If the input is empty, add the element the class 'incomplete' and return
    if (editInput.value === '') {
        element.classList.add('incomplete');
        return;
    }

    // Find the index of the todo in the dataBase array
    const todoIndex = dataBase.findIndex(todo => todo.title === titleElement.textContent);
    
    // Update the title in the DOM and in the dataBase 
    titleElement.textContent = editInput.value;
    dataBase[todoIndex].title = titleElement.textContent;
    localStorage.setItem('dataBase', JSON.stringify(dataBase));
    
    // If the infoContainer contains an input, replace it with the titleElement, otherwise, return
    if (infoContainer.querySelector('input') === null) return;
    infoContainer.replaceChild(titleElement, editInput);
    
    // Remove the class 'incomplete' from the element
    element.classList.remove('incomplete');
}

// Clear all todos from the list and the dataBase
function clearTodos () {
    todoList.innerHTML = '';
    localStorage.clear();
}

// Add button event listener for clearing all todos
clearBtn.addEventListener('click', clearTodos);

// Add button event listener for adding a new todo
addBtn.addEventListener('click', addTodo);

// Enter key event listener for adding a new todo
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addTodo();
});

const updateClock = () => {
    const dateNow = new Date();

    const hour = String(dateNow.getHours()).padStart(2, '0');
    const minute = String(dateNow.getMinutes()).padStart(2, '0');
    const second = String(dateNow.getSeconds()).padStart(2, '0');

    const hoursHTML = document.getElementById('hours');
    const minutesHTML = document.getElementById('minutes');
    const secondsHTML = document.getElementById('seconds');

    hoursHTML.textContent = hour
    minutesHTML.textContent = minute
    secondsHTML.textContent = second
}

setInterval(updateClock, 1000);