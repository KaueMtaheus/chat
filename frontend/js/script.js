//LOGIN ELEMENTS 
const login = document.querySelector(".login");
const loginForm = document.querySelector(".login__form");
const loginInput = document.querySelector(".login__input");


//CHAT ELEMENTS 
const chat = document.querySelector(".chat");
const chatForm = document.querySelector(".chat__form");
const chatInput = document.querySelector(".chat__input");



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


//FUNÇÃO PARA MUDAR COR ALEATORIA
const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


const handleSubmit = (event) => {
    event.preventDefault();

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"


    //CRIANDO UMA CONEXÃO COM SERVIDOR 
    websocket = new WebSocket("ws://localhost:4000")

    websocket.onopen = () => websocket.send(`Usuário: ${user.name} entrou no chat!`)
 


    console.log(user)
};

loginForm.addEventListener("submit", handleSubmit);
