const getBanco = () => JSON.parse(localStorage.getItem('toDoItems')) ?? [];//testar sem coalescência nem nada
const setBanco = (banco) => localStorage.setItem ('toDoItems', JSON.stringify(banco));

const bancoItems = getBanco();
const toDoItems = document.querySelector('#toDoItems');

let textoItem;

const criarHTMLItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('lbl-item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div class='div-item'>${tarefa}</div>
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
    texto = evento.target.value;
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


//em construção
const editarItem = (evento) => {
    const item = document.createElement('input');//criando o input de edição no CSS
    item.classList.add('input-edicao');
    item.innerHTML = `
        <input type="text">
        <div>${texto}</div>
    `;
    toDoItems.appendChild(item);
}



const $ = document.querySelector.bind(document);

$('#newItem').addEventListener('keypress', inserirItem);
$('#toDoItems').addEventListener('click', clickItem);
$('.lbl-item').addEventListener('dblclick', editarItem);




atualizarLista();
