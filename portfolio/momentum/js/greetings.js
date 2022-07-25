const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const greetingText = document.querySelector("#greeting span:first-child")
const logout = document.querySelector("#logout-btn")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreeting(username)
}
function paintGreeting(username) {
    const span = document.createElement("span")
    
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greetingText.innerText = `Hello ${username}~`
    span.innerText = "God loves you. God bless you."
    greeting.appendChild(span)
    logout.classList.remove(HIDDEN_CLASSNAME)
}

function onLogoutClick(event){
    const li = event.target.parentElement
    console.log(typeof li.id)
    li.remove()
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
    saveToDos()
} 
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))        
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreeting(savedUsername)
}
logout.addEventListener("click", onLogoutClick)
