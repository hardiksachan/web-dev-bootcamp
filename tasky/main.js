const inputField = document.querySelector("#task-form__input")
const addBtn = document.querySelector("#task-form__btn-add")
const taskList = document.querySelector(".task-list")

function handleAdd(event) {
    event.preventDefault()

    const newTaskElement = document.createElement("li")
    newTaskElement.classList.add("task-list-item")
    newTaskElement.innerText = inputField.value

    taskList.appendChild(newTaskElement)

    inputField.value = ""
}

addBtn.addEventListener("click", handleAdd)