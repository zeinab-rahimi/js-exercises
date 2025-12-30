const taskInput = document.getElementById('taskInput');
const buttonAddTask = document.getElementById('addTasks');
const taskSection  = document.getElementById('taskSection');

buttonAddTask.addEventListener('click', addTask);

function addTask() {

    const inputText = taskInput.value.trim();
    if (inputText === '') return;

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('task-content');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = inputText;

    contentDiv.appendChild(checkbox);
    contentDiv.appendChild(taskSpan);

    const deleteButton = document.createElement('i');
    deleteButton.classList.add('ri-delete-bin-7-line');
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        taskSection.removeChild(taskDiv);
    });

    taskDiv.appendChild(contentDiv);
    taskDiv.appendChild(deleteButton);
    taskSection.appendChild(taskDiv);

    taskInput.value = '';
}

