const dom = {
    new: document.getElementById('new'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
}
const tasks = [];

// Остлеживаем клик по кнопке Добавляем задачу 
dom.add.onclick = () => {
    const newTaskText = dom.new.value
    if (newTaskText && isNotHaveTask(newTaskText, tasks))
    {
        addTask(newTaskText, tasks)
        dom.new.value = ''
        tasksRender(tasks)
    }
}

// Функция добавления задач 
function addTask(text, list) {
    const timestamp = Date.now()
    const task = {
        id: timestamp, 
        text,
        isComplete: false,
    }
    list.push(task)
}

// Проверка существования задачи в массиве задач 
function isNotHaveTask(text, list) {
    let isNotHave = true;
    list.forEach((task) => {
        if(task.text === text) {
            alert('Задача уже сущуствует!')
            isNotHave = false  
        }
    })

    return isNotHave
}

// Функция вывода списка задач 
function tasksRender(list) {
    let htmlList = ''
      
    list.forEach((task) => {
        const cls = task.isComplete 
        ? 'todo__task todo__task_complete' 
        : 'todo__task'
        const checked = task.isComplete ? 'checked' : ''

          const taskHtml = `
          <div id='${task.id}' class="${cls}">
            <label class="todo__checkbox">
              <input type="checkbox" ${checked}/>
              <div></div>
            </label>
            <div class="todo__task-text">${task.text}</div>
            <div class="todo__task-del">-</div>
          </div>          
          `

          htmlList = htmlList + taskHtml
      })

      dom.tasks.innerHTML = htmlList
      } 


    dom.tasks.onclick = (event) => {
        const target = event.target
        console.log(target);
    }