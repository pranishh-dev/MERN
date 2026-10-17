const todos = ["run", "naam"]
const todoList = document.querySelector("#todos")
const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector("#todo")


todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let todoValue = todoInput.value.trim()
    if (!todoValue) return
    
    // todoList.textContent = ""
    // renderToDo()
    todos.push(todoValue)
    todoAppend(todoValue)
    todoInput.value = ""

})
function todoAppend(todo) {
    let todoValue = document.createElement("li")
    todoValue.textContent = todo
    todoList.append(todoValue)
}
function renderToDo() {
    todos.forEach((todo) => {
        todoAppend(todo)
    })
}
renderToDo()

