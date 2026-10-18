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

let formBtn = document.querySelector('button[type="submit"]')
let todoList = document.querySelector("#todos")
let todoForm = document.querySelector(".todo-form")
let todoInput = document.querySelector("#todo")
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

    let label = todoValue.querySelector("label");
    if (todo.isCompleted) {
        label.classList.add("line-through")
        label.classList.add("text-gray-400")
    }
    else {
        label.classList?.remove("line-through")
        label.classList?.remove("text-gray-400")
    }
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
    todoList.innerHTML = ""
    todos.forEach((todo) => {
        todoAppend(todo)
    })
    updateCounts()
}

function startEditToDo(id) {

    formBtn.textContent = "Update"
    editToDo = id
    todoToEdit = todos.find((todo) => todo.id == editToDo)
    todoInput.value = todoToEdit.text
}

function deleteToDofn(id) {
    todos = todos.filter((todo) => (todo.id !== Number(id)))
    // btn.textContent = "Add"

}

let editToDo = null


todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (editToDo) {
        let todoValue = todoInput.value
        todos = todos.map((todo) => {
            if (todo.id == editToDo) {
                return ({
                    ...todo,
                    text: todoValue
                })
            }
            return todo
        })


        //perfect for larger list
        // let targetLi = document.getElementById(editToDo)
        // let label = targetLi.querySelector("label")
        // label.textContent = todoValue;

        // console.log(todoValue);
        // console.log(label);

        //gud for small lists
        renderToDo()

        //reset
        editToDo = null
        todoInput.value = ""
        formBtn.textContent = "Add"

    }
    else {
        let todoValue = {
            id: Date.now(),
            text: todoInput.value.trim(),
            isCompleted: false
        }
        if (!todoValue.text) return

        todos.push(todoValue)
        todoAppend(todoValue)
        todoInput.value = ""
    }

})

renderToDo()



todoList.addEventListener("click", (e) => {
    // e.preventDefault()
    const targetLi = e.target.closest("li")
    if (!targetLi) return

    let id = targetLi.id
    let action = e.target.dataset.action

    if (action === "edit") {
        // todoInput.value = task.textContent
        startEditToDo(id)
    }

    if (action == "delete") {
        targetLi.remove()
        deleteToDofn(id)
    }

    updateCounts()
})

todoList.addEventListener("change", (e) => {
    // e.preventDefault()
    if (e.target.dataset.action != "checkbox") return

    const targetLi = e.target.closest("li")


    todos = todos.map((todo) => (todo.id === Number(targetLi.id))
        ? {
            ...todo,
            isCompleted: isComplete
        }
        : todo);

    const label = targetLi.querySelector("label")

    if (isComplete) {
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
