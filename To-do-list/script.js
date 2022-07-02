const inputElement = document.getElementById("idInput");
const buttonElement = document.querySelector("form button");

const tarefas = [];
buttonElement.onclick = evento =>{
    evento.preventDefault();
    if(inputElement.value){ //para não adicionar string vazia->que é lida como false
        tarefas.push(inputElement.value)
        inputElement.value = ""
        console.log(tarefas)
    }
    
}