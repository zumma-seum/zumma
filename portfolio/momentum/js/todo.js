const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")
let toDos = []
const TODOS_KEY = "todos"

function handleToDoSubmit(event){
    event.preventDefault()    
    const newTodo = toDoInput.value
    console.log(newTodo)
    toDoInput.value = ""
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    console.log(newTodoObj)
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos()
}
function paintToDo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    const button = document.createElement("button")
    span.innerText = newTodo.text
    button.innerText= "❌"
    button.addEventListener("click",deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}
function deleteToDo(event){
    const li = event.target.parentElement
    console.log(typeof li.id)
    li.remove()
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
    saveToDos()
} 
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))        
}

toDoForm.addEventListener("submit",handleToDoSubmit)
const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)        
}