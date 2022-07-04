const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

buttonElement.onclick = evento =>{
    evento.preventDefault()
    if(inputElement.value){ //para não adicionar string vazia->lida como false
       const liElement = document.createElement("li")

       const spanElement = document.createElement("span")
       spanElement.innerHTML = inputElement.value

       const BtnDel= document.createElement("button")
       BtnDel.innerHTML = "X"

       liElement.appendChild(spanElement)
       liElement.appendChild(BtnDel)

       BtnDel.onclick = () =>{
        ulElement.removeChild(liElement)
       }

       ulElement.appendChild(liElement)
       inputElement.value = ""
    }
}