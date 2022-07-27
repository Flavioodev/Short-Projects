//-> os comentários tem a finalidade de facilitar meu aprendizado

const inputElement = document.querySelector("#inputTarefa");
const buttonElement = document.querySelector("#addButton");
const ulElement = document.querySelector("#tasksList");

buttonElement.onclick = evento =>{
    evento.preventDefault();//evita o recarregamento da página
    if(inputElement.value){ //para não adicionar string vazia->que é lida como false
       var liElement = document.createElement("li")
       liElement.innerHTML = inputElement.value

       var btnDel= document.createElement("button");
       btnDel.innerHTML = "X";
       liElement.appendChild(btnDel);

       ulElement.appendChild(liElement)
       inputElement.value = ""
    }
    btnDel.onclick = () =>{
        ulElement.removeChild(liElement)
    }
}

