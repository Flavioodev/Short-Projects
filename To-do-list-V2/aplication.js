const getBanco = () => JSON.parse(localStorage.getItem('toDoItems')) ?? [];//testar sem coalescĂȘncia nem nada
const setBanco = (banco) => localStorage.setItem ('toDoItems', JSON.stringify(banco));


const bancoItems = getBanco();
const toDoItems = document.querySelector('#toDoItems');

const criarHTMLItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    toDoItems.appendChild(item);
}

const limparLista = () =>{
    while(toDoItems.firstChild){
        toDoItems.removeChild(toDoItems.lastChild);
    }
}

const atualizarLista = () => {
    limparLista();
    bancoItems.forEach ((item, indice) => criarHTMLItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        bancoItems.push ({'tarefa': texto, 'status': ''});
        setBanco(bancoItems);
        atualizarLista();
        evento.target.value = '';
    }
}

const deletarItem = (indice) =>{
    bancoItems.splice(indice,1);
    setBanco(bancoItems);
    atualizarLista();
}

const atualizarStatus = (indice) =>{
    bancoItems[indice].status = bancoItems[indice].status === '' ? 'checked' : '';
    setBanco(bancoItems);
    atualizarLista();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        deletarItem (indice);
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarStatus(indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('toDoItems').addEventListener('click', clickItem);


atualizarLista();
