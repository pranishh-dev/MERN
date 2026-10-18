// const todos = ["run", "naam","run to gym"]
let todos = [{
    id: Date.now() + 1,
    text: "run",
    isCompleted: false
}, {
    id: Date.now() + 2,
    text: "gym",
    isCompleted: true
}, {
    id: Date.now() + 3,
    text: "naam",
    isCompleted: false
}]
const todoList = document.querySelector("#todos")
const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector("#todo")
let todoCount = document.querySelector("#taskCount")
let todoCompleteCount = document.querySelector("#completeCount")

function updateCounts() {
    todoCount.textContent = `TASKS(${todos.length})`
    todoCompleteCount.textContent = `COMPLETED: ${completeCheck()}`
}
function todoAppend(todo) {
    // console.log(todo);
    let todoValue = document.createElement("li")
    todoValue.id = todo.id
    todoValue.className = "flex justify-between border border-gray-300 p-3 rounded-lg align-middle "
    todoValue.innerHTML = `
                    <input data-action="checkbox" type="checkbox" name="todoCheck" id="todoCheck-${todo.id}" class="w-4 h-4 my-auto" ${todo.isCompleted ? "checked" : ""}>
                    <label for="todoCheck-${todo.id}" class="flex-1 ml-4 my-auto ${(todo.isCompleted) ? "line-through" : ""}">${todo.text}</label>
                   
                    <div class="btns flex gap-4">
                    <button data-action="edit" class="bg-green-100 px-4 py-1 rounded-sm">Edit</button>
                        <button data-action="delete" class="bg-red-500 px-4 py-1 rounded-sm text-gray-200">Delete</button>
                    </div>
                        `
    todoList.append(todoValue)
    updateCounts()
}
function completeCheck() {
    let count = 0;
    todos.forEach((todo) => {
        if (todo.isCompleted == true) count++
    })
    return count
}
function renderToDo() {
    todos.forEach((todo) => {
        todoAppend(todo)
    })
    updateCounts()
}

renderToDo()

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let todoValue = {
        id: Date.now(),
        text: todoInput.value.trim(),
        isCompleted: false
    }
    if (!todoValue.text) return

    todos.push(todoValue)
    todoAppend(todoValue)
    todoInput.value = ""

})

todoList.addEventListener("click", (e) => {
    // e.preventDefault()
    const targetLi = e.target.closest("li")
    if (!targetLi) return

    if (e.target.dataset.action == "delete") {
        targetLi.remove()
        todos = todos.filter((todo) => (todo.id !== Number(targetLi.id)))
    }

    updateCounts()
})


todoList.addEventListener("change", (e) => {
    // e.preventDefault()
    if (e.target.dataset.action != "checkbox") return
    const targetLi = e.target.closest("li")
    if (!targetLi) return

    let isCompleted = e.target.checked

    todos = todos.map((todo) => (todo.id === Number(targetLi.id))
        ? {
            ...todo,
            isCompleted: isCompleted
        }
        : todo);

    const label = targetLi.querySelector("label")
    if (isCompleted) {
        label.classList.add("line-through")
        label.classList.add("text-gray-400")
    }
    else {
        label.classList?.remove("line-through")
        label.classList?.remove("text-gray-400")
    }


    // label.classList.toggle("text-white")
    updateCounts()
})


