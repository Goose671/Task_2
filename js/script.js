const btn__add = document.getElementById("btn__add");

const text = document.getElementById("input");

const taskList = document.getElementById('task-list');

btn__add.addEventListener('click', createTask);

const tasksJSON = localStorage.getItem('tasks'); 
const tasks = tasksJSON ? JSON.parse(tasksJSON) : [];

 displayTasks();

function addTask(e) {

    let task_div = document.createElement("div")

    task_div.classList.add("task")

    // task_div.id = numberId++

    taskList.prepend(task_div)

    // cоздал div с классом "task"

    let task_p = document.createElement("p")

    task_p.classList.add("task__text")

    task_p.innerHTML = e.value

    task_div.append(task_p)

    // создал внутри div  елемент p с классом "task__text"

    let task_btn = document.createElement("button")

    task_btn.classList.add("btn__icon")

    task_div.append(task_btn)

    // создал внутри div елемент buttton с классом "btn__icon" 

    let task_btn_pencil = document.createElement("img")

    task_btn_pencil.classList.add("icon")

    task_btn_pencil.src = "img/pencil-solid.svg"

    task_btn.append(task_btn_pencil)

    // создал внутри  button елемент img с классом "icon"

    task_btn = document.createElement("button")

    task_btn.classList.add("btn__icon")

    task_div.append(task_btn)

    // создал внутри div елемент buttton с классом "btn__icon" 

    task_btn_pencil = document.createElement("img")

    task_btn_pencil.classList.add("icon")

    task_btn_pencil.src = "img/trash-can-solid.svg"

    task_btn.append(task_btn_pencil)

    // создал внутри  button елемент img с классом "icon"

    
};

function displayTasks() {
    if (tasks.length > 0) {
        tasks.forEach(element => {
            addTask(element);
        });
    }
}

function createTask(){
    addTask(text);
    const task = {
        value: text.value
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    text.value = "" ;
}