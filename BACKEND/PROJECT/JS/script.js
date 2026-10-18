// const todos = ["run", "naam","run to gym"]
let todos = [{
    id: Date.now()+1,
    text: "run",
    isCompleted: false
}, {
    id: Date.now()+2,
    text: "gym",
    isCompleted: false
}, {
    id: Date.now()+3,
    text: "naam",
    isCompleted: false
}]
const todoList = document.querySelector("#todos")
const todoForm = document.querySelector(".todo-form")
const todoInput = document.querySelector("#todo")


todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let todoValue = {
        id: Date.now,
        text: todoInput.value.trim(),
        isCompleted: false
    }
    if (!todoValue.text) return

    // todoList.textContent = ""
    // renderToDo()
    todos.push(todoValue)
    todoAppend(todoValue)
    todoInput.value = ""

})
function todoAppend(todo) {
    // console.log(todo);
    let todoValue = document.createElement("li")
    todoValue.id = todo.id
    todoValue.className = "flex justify-between border border-gray-300 p-3 rounded-lg align-middle "
    todoValue.innerHTML = `
                    <input type="checkbox" name="todoCheck" id="todoCheck" class="w-4 h-4 my-auto">
                    <label for="todoCheck" class="flex-1 ml-4 my-auto ">${todo.text}</label>
                    <div class="btns flex gap-4">
                        <button data-action="edit" class="bg-green-100 px-4 py-1 rounded-sm">Edit</button>
                        <button data-action="delete" class="bg-red-500 px-4 py-1 rounded-sm text-gray-200">Delete</button>
                    </div>
    `
    todoList.append(todoValue)
}
function renderToDo() {
    todos.forEach((todo) => {
        todoAppend(todo)
    })
}
renderToDo()

const todoBtns = document.querySelectorAll(".btns")
// console.log(todoBtns);

todoBtns.forEach((todoBtn) => {
    todoBtn.addEventListener("click", (e) => {
        const targetLi = e.target.closest("li")
        // console.log(targetLi);

        const id = targetLi.id
        console.log(id);
        
        if (e.target.dataset.action == "delete") {
            targetLi.remove()
            todos = todos.filter((todo) => {
                if(todo.id !== Number(id)){
                    return todo
                }
                // return todo
            })
        }
        
        console.log(todos);
    })
})
