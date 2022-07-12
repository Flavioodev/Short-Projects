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

const limparItems = () =>{
    const items = document.querySelector('#toDoItems');
    while(items.firstChild){
        items.removeChild(items.lastChild);
    }
}

const atualizarItems = () => {
    limparItems();
    const banco = arrayItems;
    banco.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const banco = arrayItems;
        banco.push ({'tarefa': texto, 'status': ''});
        atualizarItems();
        evento.target.value = '';
    }
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem (indice);
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('toDoItems').addEventListener('click', clickItem);

atualizarItems();