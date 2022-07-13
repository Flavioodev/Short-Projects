let arrayItems = [];

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    document.getElementById('toDoItems').appendChild(item);
}

const limparLista = () =>{
    const items = document.querySelector('#toDoItems');
    while(items.firstChild){
        items.removeChild(items.lastChild);
    }
}

const atualizarLista = () => {
    limparLista();
    arrayItems.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        arrayItems.push ({'tarefa': texto, 'status': ''});
        atualizarLista();
        evento.target.value = '';
    }
}

const deletarItem = (indice) =>{
    arrayItems.splice(indice,1);
    atualizarLista();
}

const atualizarStatus = (indice) =>{
    arrayItems[indice].status = arrayItems[indice].status === '' ? 'checked' : '';
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