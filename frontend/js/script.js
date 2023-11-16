//LOGIN ELEMENTS 
const login = document.querySelector(".login");
const loginForm = login.querySelector(".login__form");
const loginInput = login.querySelector(".login__input");


//CHAT ELEMENTS 
const chat = document.querySelector(".chat");
const chatForm = chat.querySelector(".chat__form");
const chatInput = chat.querySelector(".chat__input");
const chatMessages = chat.querySelector(".chat__messages")


//VARIAVEL DE CORES GERADAS
const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
]

const user = { id: "", name: "", color: "" };


let websocket

const createMessageSelfElement = (content) => {
    const div = document.createElement("div")

    div.classList.add("message--self")
    div.innerHTML = content

    return div
}

const createMessageOtherElement = (content, sender, senderColor) => {
    const div = document.createElement("div")
    const div = document.createElement("span")

    div.classList.add("message--self")
    div.innerHTML = content

    return div
}


//FUNÇÃO PARA MUDAR COR ALEATORIA
const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


const processMessage = ({ data }) => {
    const { userId, userName, userColor, content } = JSON.parse(data)

    const element = createMessageSelfElement(content)

    chatMessages.appendChild(element)
}



const handleLogin = (event) => {
    event.preventDefault();

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"


    //CRIANDO UMA CONEXÃO COM SERVIDOR 
    websocket = new WebSocket("ws://localhost:4000")
    websocket.onmessage = processMessage

};

const sendMessage = (event) => {
    event.preventDefault();

const message = {
    userId: user.id,
    userName: user.name,
    userColor: user.color,
    content: chatInput.value
}
    
    websocket.send(JSON.stringify(message))

    chatInput.value = ""
}

loginForm.addEventListener("submit", handleLogin);
chatForm.addEventListener("submit", sendMessage);

